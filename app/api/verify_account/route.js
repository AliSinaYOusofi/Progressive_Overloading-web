import { NextResponse } from "next/server";

// Mock database operations - replace with your actual database
const mockDatabase = {
    users: new Map(),
    verificationCodes: new Map(),
};

export async function POST(request) {
    try {
        const body = await request.json();
        const { code, email } = body;

        if (!code) {
            return NextResponse.json(
                { error: "Verification code is required" },
                { status: 400 }
            );
        }

        // Validate code format (6 digits)
        if (!/^\d{6}$/.test(code)) {
            return NextResponse.json(
                { error: "Invalid verification code format" },
                { status: 400 }
            );
        }

        // Find the email associated with this code
        let targetEmail = email;
        if (!targetEmail) {
            // If email not provided, search through all stored codes
            for (const [
                storedEmail,
                data,
            ] of mockDatabase.verificationCodes.entries()) {
                if (data.code === code) {
                    targetEmail = storedEmail;
                    break;
                }
            }
        }

        if (!targetEmail) {
            return NextResponse.json(
                { error: "Invalid verification code" },
                { status: 400 }
            );
        }

        const verificationData =
            mockDatabase.verificationCodes.get(targetEmail);

        if (!verificationData) {
            return NextResponse.json(
                { error: "Verification code not found" },
                { status: 400 }
            );
        }

        // Check if code has expired
        if (Date.now() > verificationData.expires) {
            mockDatabase.verificationCodes.delete(targetEmail);
            return NextResponse.json(
                { error: "Verification code has expired" },
                { status: 400 }
            );
        }

        // Check if too many attempts
        if (verificationData.attempts >= 5) {
            mockDatabase.verificationCodes.delete(targetEmail);
            return NextResponse.json(
                {
                    error: "Too many failed attempts. Please request a new code.",
                },
                { status: 429 }
            );
        }

        // Verify the code
        if (verificationData.code !== code) {
            verificationData.attempts += 1;
            mockDatabase.verificationCodes.set(targetEmail, verificationData);

            return NextResponse.json(
                {
                    error: "Invalid verification code",
                    attemptsRemaining: 5 - verificationData.attempts,
                },
                { status: 400 }
            );
        }

        // Code is valid - mark user as verified
        const existingUser = mockDatabase.users.get(targetEmail) || {};
        mockDatabase.users.set(targetEmail, {
            ...existingUser,
            email: targetEmail,
            verified: true,
            verifiedAt: new Date().toISOString(),
        });

        // Remove the used verification code
        mockDatabase.verificationCodes.delete(targetEmail);

        return NextResponse.json({
            message: "Account verified successfully",
            user: {
                email: targetEmail,
                verified: true,
            },
        });
    } catch (error) {
        console.error("Verify account error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
