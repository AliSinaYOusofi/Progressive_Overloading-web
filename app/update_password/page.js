// app/update_password/page.jsx
import React, { Suspense } from "react";
import UpdatePasswordClient from "@/components/update_password/UpdatePassword";

function LoadingFallback() {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
            <div className="text-center">
                <p className="text-lg font-medium">Loading…</p>
                <p className="text-sm text-muted-foreground mt-2">
                    Preparing password reset
                </p>
            </div>
        </div>
    );
}

export default function Page() {
    return (
        <Suspense fallback={<LoadingFallback />}>
            <UpdatePasswordClient />
        </Suspense>
    );
}
