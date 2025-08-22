"use client";

import { motion } from "framer-motion";
import { Smartphone, Star, Users, Download } from "lucide-react";

const GooglePlayDownload = () => {
    return (
        <motion.div
            className="w-full text-black  rounded-2xl p-12 md:p-16 lg:p-20 cursor-pointer group relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="flex-1 text-center lg:text-left">
                    <motion.h2
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-black"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        Download Our App
                    </motion.h2>

                    <motion.p
                        className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        Take your progressive overload training to the next
                        level with our comprehensive mobile app
                    </motion.p>

                    
                </div>

                <motion.div
                    className="flex-shrink-0"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    <motion.div
                        className="inline-flex items-center bg-primary  text-white rounded-2xl px-12 py-8 "
                        whileHover={{
                            scale: 1.05,
                            boxShadow:
                                "0 25px 50px -12px rgba(16, 185, 129, 0.25)",
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        
                        <div className="flex flex-col items-start">
                            <span className="text-lg md:text-xl text-gray-300 leading-tight">
                                GET IT ON
                            </span>
                            <span className="text-3xl md:text-4xl font-bold leading-tight">
                                Google Play
                            </span>
                        </div>

                        <Smartphone className="ml-6 h-12 w-12 md:h-16 md:w-16 text-gray-300 " />
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default GooglePlayDownload;
