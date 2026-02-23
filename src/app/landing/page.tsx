"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LoadingScreen } from "./components/LoadingScreen";
import { InteractiveBackground } from "./components/InteractiveBackground";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { JoinSection } from "./components/JoinSection";
import { WaterRippleBackground } from "./components/WaterRippleBackground";
import { Header } from "./components/Header";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      </AnimatePresence>
      
      {isLoaded && (
        <>
          <ThemeToggle />
          <Header />
          
          <div className="fixed inset-0 z-0">
            <WaterRippleBackground imageUrl="/foto-grupo-1.png" />
            <div className="absolute inset-0 bg-background/20 dark:bg-background/40 pointer-events-none" />
            <InteractiveBackground />
          </div>

          <motion.main 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1 }}
            className="relative z-10 min-h-screen w-full selection:bg-neo-orange/30 overflow-x-hidden pointer-events-none"
          >
            <HeroSection />
            <AboutSection />
            <JoinSection />
          </motion.main>
        </>
      )}
    </>
  );
}
