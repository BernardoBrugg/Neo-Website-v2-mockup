"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Rocket } from "lucide-react";
import { useEffect, useState } from "react";

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  useEffect(() => {
    let isCancelled = false;

    const imagesToPreload = [
      "/foto-grupo-1.png",
      "/LogoNEO_horiz_transp (1).png",
      "/LogoNEO_horiz_transp_inv.png",
    ];

    let loadedCount = 0;

    const checkCompletion = () => {
      if (isCancelled) return;
      loadedCount++;
      if (loadedCount === imagesToPreload.length) {
        setAssetsLoaded(true);
      }
    };

    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = checkCompletion;
      img.onerror = checkCompletion;
    });

    const maxTimeout = setTimeout(() => {
      if (!isCancelled && !assetsLoaded) {
        setAssetsLoaded(true);
      }
    }, 4000);

    return () => {
      isCancelled = true;
      clearTimeout(maxTimeout);
    };
  }, [assetsLoaded]);

  useEffect(() => {
    if (!assetsLoaded) return;

    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onComplete();
      }, 500); 
    }, 2000); 

    return () => clearTimeout(timer);
  }, [assetsLoaded, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden"
        >
          <motion.div
            initial={{ y: "100vh" }}
            animate={{ y: ["100vh", "-50vh"] }} 
            transition={{ 
              duration: 2.0, 
              ease: "easeIn" 
            }}
            className="absolute flex flex-col items-center justify-center pointer-events-none"
          >
            <Rocket className="h-28 w-28 text-white drop-shadow-[0_0_20px_rgba(255,255,255,1)] z-30 -rotate-45" />
            
            <motion.div 
              initial={{ scale: 0, opacity: 0.8 }}
              animate={{ scale: [0, 2, 80], opacity: [0.8, 1, 1] }} 
              transition={{ 
                duration: 2.0, 
                ease: "circIn",
                times: [0, 0.6, 1]
              }}
              className="absolute top-16 h-64 w-64 rounded-full bg-neo-orange z-20 origin-center"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
