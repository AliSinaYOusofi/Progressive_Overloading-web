import { NextResponse } from "next/server";

// Mock email service - replace with your actual email service
const sendEmail = async (to, subject, html) => {
    // This is a mock implementation
    // Replace with your actual email service like SendGrid, Resend, etc.
    console.log(`Sending email to: ${to}`);
    console.log(`Subject: ${subject}`);
    console.log(`HTML: ${html}`);

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return { success: true };
};

// Mock database operations - replace with your actual database
const mockDatabase = {
    users: new Map(),
    verificationCodes: new Map(),
    resetTokens: new Map(),
};

const generateVerificationCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
};

const generateResetToken = () => {
    return (
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15)
    );
};

export async function POST(request) {
    try {
        const body = await request.json();
        const { email, type = "account_verification" } = body;

        if (!email) {
            return NextResponse.json(
                { error: "Email is required" },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: "Invalid email format" },
                { status: 400 }
            );
        }

        if (type === "account_verification") {
            // Generate verification code
            const verificationCode = generateVerificationCode();

            // Store verification code (expires in 10 minutes)
            mockDatabase.verificationCodes.set(email, {
                code: verificationCode,
                expires: Date.now() + 10 * 60 * 1000,
                attempts: 0,
            });

            // Send verification email
            const emailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #059669, #10b981); padding: 40px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Progressive Overload</h1>
            <p style="color: white; margin: 10px 0 0 0; opacity: 0.9;">Verify Your Account</p>
          </div>
          <div style="padding: 40px; background: #f8fafc;">
            <h2 style="color: #1e293b; margin-bottom: 20px;">Confirm Your Account</h2>
            <p style="color: #475569; line-height: 1.6; margin-bottom: 30px;">
              Welcome to Progressive Overload! Please use the verification code below to confirm your account:
            </p>
            <div style="background: white; border: 2px solid #059669; border-radius: 8px; padding: 20px; text-align: center; margin: 30px 0;">
              <div style="font-size: 32px; font-weight: bold; color: #059669; letter-spacing: 8px;">${verificationCode}</div>
            </div>
            <p style="color: #64748b; font-size: 14px; margin-top: 30px;">
              This code will expire in 10 minutes. If you didn't request this verification, please ignore this email.
            </p>
          </div>
        </div>
      `;

            await sendEmail(
                email,
                "Verify Your Progressive Overload Account",
                emailHtml
            );

            return NextResponse.json({
                message: "Verification code sent successfully",
                expires: Date.now() + 10 * 60 * 1000,
            });
        } else if (type === "password_reset") {
            // Generate reset token
            const resetToken = generateResetToken();

            // Store reset token (expires in 24 hours)
            mockDatabase.resetTokens.set(resetToken, {
                email,
                expires: Date.now() + 24 * 60 * 60 * 1000,
                used: false,
            });

            // Create reset link
            const resetLink = `${
                process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
            }/update_password?token=${resetToken}`;

            // Send password reset email
            const emailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #059669, #10b981); padding: 40px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Progressive Overload</h1>
            <p style="color: white; margin: 10px 0 0 0; opacity: 0.9;">Password Reset</p>
          </div>
          <div style="padding: 40px; background: #f8fafc;">
            <h2 style="color: #1e293b; margin-bottom: 20px;">Reset Your Password</h2>
            <p style="color: #475569; line-height: 1.6; margin-bottom: 30px;">
              You requested to reset your password. Click the button below to create a new password:
            </p>
            <div style="text-align: center; margin: 30px 0;">
              <a href="${resetLink}" style="background: #059669; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">
                Reset Password
              </a>
            </div>
            <p style="color: #64748b; font-size: 14px; margin-top: 30px;">
              This link will expire in 24 hours. If you didn't request a password reset, please ignore this email.
            </p>
            <p style="color: #64748b; font-size: 12px; margin-top: 20px; word-break: break-all;">
              If the button doesn't work, copy and paste this link: ${resetLink}
            </p>
          </div>
        </div>
      `;

            await sendEmail(
                email,
                "Reset Your Progressive Overload Password",
                emailHtml
            );

            return NextResponse.json({
                message: "Password reset link sent successfully",
            });
        }

        return NextResponse.json(
            { error: "Invalid verification type" },
            { status: 400 }
        );
    } catch (error) {
        console.error("Send email verification error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
