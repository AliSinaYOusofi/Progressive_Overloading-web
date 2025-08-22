"use client";

import { motion } from "framer-motion";
import { Home, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-primary/5 flex items-center justify-center p-4">
            <div className="max-w-2xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8"
                >
                    {/* 404 Number */}
                    <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{
                            duration: 0.8,
                            type: "spring",
                            bounce: 0.4,
                        }}
                        className="relative"
                    >
                        <h1 className="text-9xl md:text-[12rem] font-bold text-primary/20 leading-none">
                            404
                        </h1>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{
                                    duration: 20,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "linear",
                                }}
                                className="w-24 h-24 border-4 border-primary/30 border-t-primary rounded-full"
                            />
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
                            Page Not Found
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-lg text-muted-foreground max-w-md mx-auto"
                        >
                            Looks like this page skipped leg day! The page
                            you&apos;re looking for doesn&apos;t exist or has been moved.
                        </motion.p>

                        {/* Action Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
                        >
                            <Button
                                asChild
                                size="lg"
                                className="bg-primary hover:bg-primary/90"
                            >
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

                    {/* Fitness Tips */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50"
                    >
                        <h3 className="text-lg font-semibold text-primary mb-2">
                            💪 Quick Fitness Tip
                        </h3>
                        <p className="text-muted-foreground">
                            While you&apos;re here, remember: Progressive overload is
                            about gradually increasing the stress on your
                            muscles. Start with small increments!
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
