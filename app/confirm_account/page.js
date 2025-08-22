"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardFooter,
} from "@/components/ui/card";
import { CheckCircle, XCircle, Loader2, ArrowLeft } from "lucide-react";
import Link from "next/link";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
};

export default function ConfirmAccountPage() {
    const [status, setStatus] = useState("loading");
    const [errorMessage, setErrorMessage] = useState("");
    const searchParams = useSearchParams();

    useEffect(() => {
        const confirmAccount = async () => {
            try {
                // Get the token and type from URL parameters (from Supabase email)
                const token = searchParams.get("token");
                const type = searchParams.get("type");

                console.log("[v0] Token and type from URL:", token, type);

                if (!token || !type) {
                    setStatus("error");
                    setErrorMessage(
                        "Invalid confirmation link. Missing parameters."
                    );
                    return;
                }

                const response = await fetch("/api/verify_account", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ token, type }),
                });

                const data = await response.json();
                if (!response.ok) {
                    throw new Error(data.error || "Failed to verify account");
                }

                setStatus("success");
            } catch (error) {
                console.error("[v0] Error confirming account:", error);
                setStatus("error");
                setErrorMessage(
                    error instanceof Error
                        ? error.message
                        : "An unknown error occurred while confirming your account."
                );
            }
        };

        confirmAccount();
    }, [searchParams]);

    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
            <motion.div
                initial="initial"
                animate="animate"
                variants={fadeInUp}
                className="w-full max-w-md"
            >
                <Card>
                    <CardHeader className="text-center">
                        <CardTitle className="text-2xl font-bold">
                            {status === "loading" && "Confirming Your Account"}
                            {status === "success" && "Account Confirmed!"}
                            {status === "error" && "Confirmation Failed"}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center text-center">
                        {status === "loading" && (
                            <motion.div
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col items-center"
                            >
                                <Loader2 className="h-16 w-16 text-primary animate-spin mb-4" />
                                <p className="text-muted-foreground">
                                    Please wait while we confirm your account...
                                </p>
                            </motion.div>
                        )}

                        {status === "success" && (
                            <motion.div
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col items-center"
                            >
                                <CheckCircle className="h-16 w-16 text-primary mb-4" />
                                <p className="mb-4 text-foreground">
                                    Your Progressive Overload account has been
                                    successfully confirmed! You can now start
                                    your strength training journey.
                                </p>
                                <div className="grid grid-cols-1 gap-4 mt-4 w-full">
                                    <div className="bg-muted rounded-lg p-4 flex items-center">
                                        <div className="bg-primary/10 rounded-full p-2 mr-3">
                                            <CheckCircle className="h-5 w-5 text-primary" />
                                        </div>
                                        <div className="text-left">
                                            <p className="font-medium text-foreground">
                                                Track your workout progress
                                            </p>
                                        </div>
                                    </div>
                                    <div className="bg-muted rounded-lg p-4 flex items-center">
                                        <div className="bg-primary/10 rounded-full p-2 mr-3">
                                            <CheckCircle className="h-5 w-5 text-primary" />
                                        </div>
                                        <div className="text-left">
                                            <p className="font-medium text-foreground">
                                                Access personalized training
                                                plans
                                            </p>
                                        </div>
                                    </div>
                                    <div className="bg-muted rounded-lg p-4 flex items-center">
                                        <div className="bg-primary/10 rounded-full p-2 mr-3">
                                            <CheckCircle className="h-5 w-5 text-primary" />
                                        </div>
                                        <div className="text-left">
                                            <p className="font-medium text-foreground">
                                                Monitor strength gains over time
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {status === "error" && (
                            <motion.div
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col items-center"
                            >
                                <XCircle className="h-16 w-16 text-destructive mb-4" />
                                <p className="mb-2 text-destructive font-medium">
                                    We couldn&apos;t confirm your account
                                </p>
                                <p className="text-muted-foreground mb-4">
                                    {errorMessage ||
                                        "The confirmation link may be invalid or expired."}
                                </p>
                                <div className="bg-muted rounded-lg p-4 w-full text-left">
                                    <p className="font-medium mb-2 text-foreground">
                                        What you can do:
                                    </p>
                                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                                        <li>
                                            Try signing up again with the same
                                            email
                                        </li>
                                        <li>
                                            Check if you clicked the correct
                                            link from your email
                                        </li>
                                        <li>
                                            Contact support if the problem
                                            persists
                                        </li>
                                    </ul>
                                </div>
                            </motion.div>
                        )}
                    </CardContent>
                    <CardFooter className="flex justify-center">
                        {status === "loading" && (
                            <Button
                                disabled
                                variant="outline"
                                className="w-full bg-transparent"
                            >
                                Please wait...
                            </Button>
                        )}

                        {status === "success" && (
                            <Button asChild className="w-full">
                                <Link
                                    href="/"
                                    className="flex items-center justify-center"
                                >
                                    Start Your Fitness Journey
                                </Link>
                            </Button>
                        )}

                        {status === "error" && (
                            <div className="flex flex-col w-full gap-2">
                                <Button asChild variant="outline">
                                    <Link
                                        href="/"
                                        className="inline-flex items-center justify-center"
                                    >
                                        <ArrowLeft className="mr-2 h-4 w-4" />
                                        Back to Home
                                    </Link>
                                </Button>
                            </div>
                        )}
                    </CardFooter>
                </Card>
            </motion.div>
        </div>
    );
}
