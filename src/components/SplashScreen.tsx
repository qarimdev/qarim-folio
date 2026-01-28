"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ColorBends from "./ColorBends";

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [canSkip, setCanSkip] = useState(false);

  useEffect(() => {
    // Allow skipping after 1 second
    const skipTimer = setTimeout(() => setCanSkip(true), 1000);
    
    // Auto-complete after 3 seconds
    const completeTimer = setTimeout(() => {
      handleComplete();
    }, 3000);

    return () => {
      clearTimeout(skipTimer);
      clearTimeout(completeTimer);
    };
  }, []);

  const handleComplete = () => {
    setIsVisible(false);
    setTimeout(onComplete, 800); // Wait for exit animation
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.1,
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
          className="fixed inset-0 z-50 bg-black overflow-hidden"
        >
          {/* ColorBends Background */}
          <div className="absolute inset-0">
            <ColorBends
              colors={["#ff5c7a", "#8a5cff", "#00ffd1", "#ffeb3b", "#ff6b6b"]}
              speed={0.3}
              scale={1.2}
              frequency={0.8}
              warpStrength={1.5}
              autoRotate={15}
              mouseInfluence={1.5}
              parallax={0.8}
              noise={0.05}
            />
          </div>

          {/* Content Overlay */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            {/* Name/Logo */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: { 
                  duration: 1.2, 
                  delay: 0.3,
                  ease: "easeOut"
                }
              }}
              className="text-center relative z-20"
            >
              {/* Animated Text Glow */}
              <motion.h1 
                className="text-5xl md:text-7xl font-bold text-white mb-4 relative"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(168, 92, 255, 0.5)",
                    "0 0 40px rgba(255, 92, 122, 0.8)",
                    "0 0 60px rgba(0, 255, 209, 0.6)",
                    "0 0 20px rgba(168, 92, 255, 0.5)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                  Welcome
                </span>
              </motion.h1>
              
              {/* Animated Divider */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ 
                  width: "100px",
                  transition: { 
                    duration: 0.8, 
                    delay: 1.2,
                    ease: "easeOut"
                  }
                }}
                className="h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-6 relative overflow-hidden"
              >
                <motion.div
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50"
                />
              </motion.div>
              
              {/* Subtitle with Wave Animation */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 0.8,
                  transition: { 
                    duration: 0.6, 
                    delay: 1.6
                  }
                }}
                className="text-gray-300 text-lg md:text-xl"
              >
                {["to", "my", "portfolio"].map((word, i) => (
                  <motion.span
                    key={i}
                    animate={{
                      y: [0, -3, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.1,
                      ease: "easeInOut",
                    }}
                    className="inline-block"
                  >
                    {word}{i < 2 && "\u00A0"}
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>

            </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
