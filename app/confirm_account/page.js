// app/confirm_account/page.jsx
import React, { Suspense } from "react";
import ConfirmAccountClient from "@/components/confirm_account/ConfirmAccount";

function LoadingFallback() {
    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="text-center">
                <p className="text-lg font-medium">Confirming account…</p>
                <p className="text-sm text-muted-foreground mt-2">
                    Please wait
                </p>
            </div>
        </div>
    );
}

export default function Page() {
    return (
        <Suspense fallback={<LoadingFallback />}>
            <ConfirmAccountClient />
        </Suspense>
    );
}
