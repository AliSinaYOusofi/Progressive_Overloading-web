import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req) {
    try {
        const { email } = await req.json();

        if (!email) {
            return NextResponse.json(
                { error: "Email is required" },
                { status: 400 }
            );
        }

        const { data, error } = await supabase
            .from("users")
            .select("id")
            .eq("email", email)
            .single();

        if (error) {
            console.log(error, "error in reset password");
            return NextResponse.json(
                { message: "email not found", success: false },
                { status: 500 }
            );
        }

        if (data) {
            const { error: resetError } =
                await supabase.auth.resetPasswordForEmail(email);
            
            if (resetError) {
                return NextResponse.json(
                    {
                        message: "Failed to send password reset email.",
                        success: false,
                    },
                    { status: 500 }
                );
            }

            return NextResponse.json(
                { success: true, message: "Password reset email sent." },
                { status: 200 }
            );
        }

        return NextResponse.json(
            { message: "User not found.", success: false },
            { status: 404 }
        );
    } catch (error) {
        console.error("Error processing request:", error);
        return NextResponse.json(
            { message: "Internal Server Error", success: false },
            { status: 500 }
        );
    }
}
