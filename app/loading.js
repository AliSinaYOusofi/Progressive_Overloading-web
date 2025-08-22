"use client";

import { motion } from "framer-motion";

export default function Loading() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-primary/5 flex items-center justify-center p-4">
            <div className="text-center space-y-8">
                {/* Loading Animation */}
                <motion.div
                    className="relative mx-auto w-32 h-32"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Outer Ring */}
                    <motion.div
                        className="absolute inset-0 border-4 border-primary/20 rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 3,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />

                    {/* Inner Ring */}
                    <motion.div
                        className="absolute inset-4 border-4 border-accent/40 border-t-accent rounded-full"
                        animate={{ rotate: -360 }}
                        transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />

                    {/* Center Dot */}
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{
                            duration: 1.5,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                        }}
                    >
                        <div className="w-4 h-4 bg-primary rounded-full" />
                    </motion.div>
                </motion.div>

                {/* Loading Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-4"
                >
                    <h2 className="text-2xl font-bold text-foreground">
                        Loading Your Workout
                    </h2>

                    <motion.p
                        className="text-muted-foreground"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                        }}
                    >
                        Preparing your progressive overload journey...
                    </motion.p>
                </motion.div>

                {/* Progress Dots */}
                <div className="flex justify-center space-x-2">
                    {[0, 1, 2].map((index) => (
                        <motion.div
                            key={index}
                            className="w-3 h-3 bg-primary rounded-full"
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Number.POSITIVE_INFINITY,
                                delay: index * 0.2,
                                ease: "easeInOut",
                            }}
                        />
                    ))}
                </div>

                {/* Fitness Tip */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/50 max-w-md mx-auto"
                >
                    <p className="text-sm text-muted-foreground">
                        💡 <strong className="text-primary">Pro Tip:</strong>{" "}
                        Consistency beats perfection. Small daily improvements
                        lead to massive results!
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
