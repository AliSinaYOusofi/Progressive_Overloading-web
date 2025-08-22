"use client";

import { motion } from "framer-motion";
import { RefreshCw, Home, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error("[v0] Error boundary caught:", error);
    }, [error]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-background via-destructive/5 to-muted/30 flex items-center justify-center p-4">
            <div className="max-w-2xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8"
                >
                    {/* Error Icon */}
                    <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{
                            duration: 0.8,
                            type: "spring",
                            bounce: 0.4,
                        }}
                        className="relative mx-auto w-32 h-32"
                    >
                        <div className="absolute inset-0 bg-destructive/10 rounded-full flex items-center justify-center">
                            <motion.div
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{
                                    duration: 2,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut",
                                }}
                            >
                                <AlertTriangle className="w-16 h-16 text-destructive" />
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <div className="space-y-6">
                        <motion.h2
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-3xl md:text-4xl font-bold text-foreground"
                        >
                            Something Went Wrong
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-lg text-muted-foreground max-w-md mx-auto"
                        >
                            Don&apos;t worry, even the strongest athletes face
                            setbacks. Let&quot;s get you back on track!
                        </motion.p>

                        {/* Error Details */}
                        {error?.message && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="bg-destructive/5 border border-destructive/20 rounded-lg p-4 text-left"
                            >
                                <h3 className="font-semibold text-destructive mb-2">
                                    Error Details:
                                </h3>
                                <code className="text-sm text-muted-foreground break-all">
                                    {error.message}
                                </code>
                            </motion.div>
                        )}

                        {/* Action Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
                        >
                            <Button
                                onClick={reset}
                                size="lg"
                                className="bg-primary hover:bg-primary/90 flex items-center gap-2"
                            >
                                <RefreshCw className="w-4 h-4" />
                                Try Again
                            </Button>

                            <Button asChild variant="outline" size="lg">
                                <Link
                                    href="/"
                                    className="flex items-center gap-2"
                                >
                                    <Home className="w-4 h-4" />
                                    Back to Home
                                </Link>
                            </Button>
                        </motion.div>
                    </div>

                    {/* Motivational Quote */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50"
                    >
                        <h3 className="text-lg font-semibold text-primary mb-2">
                            💪 Stay Strong
                        </h3>
                        <p className="text-muted-foreground italic">
                            &quot;The only bad workout is the one that didn&apos;t happen.
                            The same goes for errors - they&apos;re just
                            opportunities to come back stronger!&quot;
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
