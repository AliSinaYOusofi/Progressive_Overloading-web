"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Mail, ArrowLeft, CheckCircle } from "lucide-react";
import Link from "next/link";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
};

export default function ResetPasswordPage() {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isEmailSent, setIsEmailSent] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        try {
            const response = await fetch("/api/send_email_verification", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, type: "password_reset" }),
            });

            const data = await response.json();

            if (response.ok) {
                setIsEmailSent(true);
            } else {
                setError(data.error || "Failed to send reset email");
            }
        } catch (err) {
            setError("Something went wrong. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    if (isEmailSent) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center p-4">
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={fadeInUp}
                    className="w-full max-w-md"
                >
                    <Card className="text-center">
                        <CardHeader>
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="h-8 w-8 text-primary" />
                            </div>
                            <CardTitle className="text-2xl font-bold text-primary">
                                Check Your Email
                            </CardTitle>
                            <CardDescription>
                                We&apos;ve sent a password reset link to{" "}
                                <strong>{email}</strong>
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-sm text-muted-foreground">
                                Click the link in the email to reset your
                                password. The link will expire in 24 hours.
                            </p>
                            <Button asChild className="w-full">
                                <Link href="/">Return to Home</Link>
                            </Button>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        );
    }

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
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Mail className="h-8 w-8 text-primary" />
                        </div>
                        <CardTitle className="text-2xl font-bold">
                            Reset Your Password
                        </CardTitle>
                        <CardDescription>
                            Enter your email address and we&apos;ll send you a link
                            to reset your password
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email">Email Address</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            {error && (
                                <Alert variant="destructive">
                                    <AlertDescription>{error}</AlertDescription>
                                </Alert>
                            )}

                            <Button
                                type="submit"
                                className="w-full"
                                disabled={isLoading}
                            >
                                {isLoading ? "Sending..." : "Send Reset Link"}
                            </Button>
                        </form>

                        <div className="mt-6 text-center">
                            <Button variant="ghost" asChild>
                                <Link
                                    href="/"
                                    className="inline-flex items-center"
                                >
                                    <ArrowLeft className="mr-2 h-4 w-4" />
                                    Back to Home
                                </Link>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    );
}
