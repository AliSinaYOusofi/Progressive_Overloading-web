import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request) {
    try {
        const { token, type } = await request.json();

        if (!token || !type) {
            return NextResponse.json(
                { error: "Missing required parameters" },
                { status: 400 }
            );
        }

        const { error } = await supabase.auth.verifyOtp({
            token_hash: token,
            type: type,
        });

        if (error) {
            console.error("Error verifying account:", error);
            return NextResponse.json({ error: error.message }, { status: 400 });
        }

        return NextResponse.json(
            { success: true, message: "Account verified successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error in verify-account route:", error);
        return NextResponse.json(
            { error: "An unexpected error occurred" },
            { status: 500 }
        );
    }
}
