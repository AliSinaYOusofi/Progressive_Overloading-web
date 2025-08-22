import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(req) {
    const { password, confirmPassword, token, email } = await req.json();

    console.log(
        password,
        confirmPassword,
        token,
        email,
        "password, confirmPassword, token, email"
    );
    try {
        if (!password || !confirmPassword) {
            return NextResponse.json(
                { message: "Insufficient data provided" },
                { status: 400 }
            );
        } else if (!token || !email) {
            return NextResponse.json(
                { error: "Invalid confirmation link. Missing parameters." },
                { status: 400 }
            );
        } else if (password !== confirmPassword) {
            return NextResponse.json(
                { error: "Passwords do not match" },
                { status: 400 }
            );
        } else if (password.length < 6 || confirmPassword.length < 6) {
            return NextResponse.json(
                { error: "Password must be at least 6 characters long" },
                { status: 400 }
            );
        }

        const { data, error } = await supabase.auth.updateUser({
            password,
            token,
        });

        if (error) {
            return NextResponse.json(
                { message: "Failed to update password" },
                { status: 500 }
            );
        }

        const { error: updateUserError } = await supabase
            .from("users")
            .update({ password })
            .eq("email", email)
            .single();

        if (updateUserError) {
            return NextResponse.json(
                { message: "Failed to update password" },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { message: "Password updated successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error updating password:", error);
        return NextResponse.json(
            { message: "Failed to update password" },
            { status: 500 }
        );
    }
}
