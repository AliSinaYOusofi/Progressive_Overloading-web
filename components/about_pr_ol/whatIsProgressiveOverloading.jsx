"use client";

import { motion } from "framer-motion";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    TrendingUp,
    Dumbbell,
    BarChart3,
    Clock,
    Target,
    Zap,
} from "lucide-react";

const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const methods = [
    {
        icon: Dumbbell,
        title: "Increase Weight",
        description:
            "Add more resistance to challenge your muscles with heavier loads",
        example: "Week 1: 50lbs → Week 2: 55lbs",
    },
    {
        icon: BarChart3,
        title: "Add More Reps",
        description: "Perform additional repetitions with the same weight",
        example: "Week 1: 8 reps → Week 2: 10 reps",
    },
    {
        icon: Clock,
        title: "Increase Volume",
        description: "Add more sets or training sessions per week",
        example: "Week 1: 3 sets → Week 2: 4 sets",
    },
    {
        icon: Target,
        title: "Improve Form",
        description: "Focus on better technique and range of motion",
        example: "Deeper squats, controlled tempo",
    },
];

export default function ProgressiveOverloadExplanation() {
    return (
        <section className="py-24 bg-gradient-to-br from-accent/5 to-primary/5">
            <div className="container mx-auto px-4">
                <motion.div
                    className="max-w-6xl mx-auto"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    {/* Header */}
                    <motion.div
                        className="text-center mb-16"
                        variants={fadeInUp}
                    >
                        <Badge
                            variant="secondary"
                            className="mb-4 bg-primary/10 text-primary border-primary/20"
                        >
                            <Zap className="w-4 h-4 mr-2" />
                            Core Concept
                        </Badge>
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                            What is{" "}
                            <span className="text-primary">
                                Progressive Overload
                            </span>
                            ?
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            Progressive overload is the fundamental principle of
                            strength training that involves gradually increasing
                            the demands placed on your muscles over time to
                            stimulate continuous growth and adaptation.
                        </p>
                    </motion.div>

                    {/* Main Definition Card */}
                    <motion.div className="mb-16" variants={fadeInUp}>
                        <Card className="bg-card/80 backdrop-blur-sm border-primary/20 shadow-lg">
                            <CardHeader className="text-center pb-4">
                                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <TrendingUp className="h-10 w-10 text-primary" />
                                </div>
                                <CardTitle className="text-2xl md:text-3xl font-bold text-foreground">
                                    The Science Behind Growth
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-center">
                                <CardDescription className="text-lg leading-relaxed max-w-4xl mx-auto">
                                    When you consistently challenge your muscles
                                    beyond their current capacity, they respond
                                    by becoming stronger and larger. This
                                    adaptation process is your body's way of
                                    preparing for future demands. Without
                                    progressive overload, your muscles have no
                                    reason to grow - they'll simply maintain
                                    their current state.
                                </CardDescription>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Methods Grid */}
                    <motion.div variants={fadeInUp}>
                        <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
                            How to Apply Progressive Overload
                        </h3>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {methods.map((method, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    whileHover={{ y: -5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Card className="h-full hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
                                        <CardHeader className="pb-3">
                                            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-3">
                                                <method.icon className="h-6 w-6 text-accent" />
                                            </div>
                                            <CardTitle className="text-lg font-bold text-foreground">
                                                {method.title}
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-3">
                                            <CardDescription className="text-sm leading-relaxed">
                                                {method.description}
                                            </CardDescription>
                                            <div className="bg-muted/50 rounded-lg p-3">
                                                <p className="text-xs font-medium text-primary">
                                                    Example:
                                                </p>
                                                <p className="text-sm text-muted-foreground">
                                                    {method.example}
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Key Takeaway */}
                    <motion.div
                        className="mt-16 text-center"
                        variants={fadeInUp}
                    >
                        <Card className="bg-primary/5 border-primary/20 max-w-4xl mx-auto">
                            <CardContent className="pt-8">
                                <div className="flex items-center justify-center mb-4">
                                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                                        <Target className="h-8 w-8 text-primary" />
                                    </div>
                                </div>
                                <h4 className="text-xl font-bold text-foreground mb-4">
                                    Remember: Consistency is Key
                                </h4>
                                <p className="text-muted-foreground leading-relaxed">
                                    Progressive overload doesn't mean adding
                                    weight every single workout. It's about
                                    making small, sustainable increases over
                                    weeks and months. Listen to your body, track
                                    your progress, and focus on gradual
                                    improvement rather than dramatic jumps.
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
