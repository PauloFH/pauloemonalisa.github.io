"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface SplashScreenProps {
    onDismiss: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onDismiss }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-gradient-to-br from-pink-300 to-purple-300 flex items-center justify-center z-50 cursor-pointer"
            onClick={onDismiss}
        >
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="relative"
            >
                <motion.div
                    animate={{
                        scale: [1, 1.05, 1],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="text-9xl md:text-[15rem] text-red-600 drop-shadow-lg"
                >
                    ❤️
                </motion.div>
                <div className="absolute inset-0 flex items-center justify-center text-center text-white text-2xl md:text-3xl font-bold px-4">
                    Clique para revelar nosso amor!
                </div>
            </motion.div>
        </motion.div>
    );
};

export default SplashScreen;
