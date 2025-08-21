import { NextResponse } from "next/server";

// Mock database operations - replace with your actual database
const mockDatabase = {
    users: new Map(),
    resetTokens: new Map(),
};

// Mock password hashing - replace with bcrypt or similar
const hashPassword = async (password) => {
    // This is a mock implementation
    // In production, use bcrypt or similar: await bcrypt.hash(password, 12)
    return `hashed_${password}_${Date.now()}`;
};

const validatePassword = (password) => {
    if (password.length < 8) {
        return "Password must be at least 8 characters long";
    }
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
        return "Password must contain at least one uppercase letter, one lowercase letter, and one number";
    }
    return null;
};

export async function POST(request) {
    try {
        const body = await request.json();
        const { token, password, currentPassword } = body;

        if (!password) {
            return NextResponse.json(
                { error: "New password is required" },
                { status: 400 }
            );
        }

        // Validate password strength
        const passwordError = validatePassword(password);
        if (passwordError) {
            return NextResponse.json({ error: passwordError }, { status: 400 });
        }

        if (token) {
            // Password reset flow using token
            const resetData = mockDatabase.resetTokens.get(token);

            if (!resetData) {
                return NextResponse.json(
                    { error: "Invalid or expired reset token" },
                    { status: 400 }
                );
            }

            // Check if token has expired
            if (Date.now() > resetData.expires) {
                mockDatabase.resetTokens.delete(token);
                return NextResponse.json(
                    { error: "Reset token has expired" },
                    { status: 400 }
                );
            }

            // Check if token has already been used
            if (resetData.used) {
                return NextResponse.json(
                    { error: "Reset token has already been used" },
                    { status: 400 }
                );
            }

            // Hash the new password
            const hashedPassword = await hashPassword(password);

            // Update user password
            const existingUser = mockDatabase.users.get(resetData.email) || {};
            mockDatabase.users.set(resetData.email, {
                ...existingUser,
                email: resetData.email,
                password: hashedPassword,
                passwordUpdatedAt: new Date().toISOString(),
            });

            // Mark token as used
            resetData.used = true;
            mockDatabase.resetTokens.set(token, resetData);

            return NextResponse.json({
                message: "Password updated successfully",
            });
        } else {
            // Authenticated user changing password (requires current password)
            if (!currentPassword) {
                return NextResponse.json(
                    { error: "Current password is required" },
                    { status: 400 }
                );
            }

            // In a real app, you would get the user from the session/JWT
            // For this mock, we'll assume the email is provided or extracted from auth
            const { email } = body;

            if (!email) {
                return NextResponse.json(
                    { error: "User authentication required" },
                    { status: 401 }
                );
            }

            const user = mockDatabase.users.get(email);
            if (!user) {
                return NextResponse.json(
                    { error: "User not found" },
                    { status: 404 }
                );
            }

            // In production, verify current password with bcrypt.compare
            // For mock, we'll assume it's valid if provided

            // Hash the new password
            const hashedPassword = await hashPassword(password);

            // Update user password
            mockDatabase.users.set(email, {
                ...user,
                password: hashedPassword,
                passwordUpdatedAt: new Date().toISOString(),
            });

            return NextResponse.json({
                message: "Password updated successfully",
            });
        }
    } catch (error) {
        console.error("Update password error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
