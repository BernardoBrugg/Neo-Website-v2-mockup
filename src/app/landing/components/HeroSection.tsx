"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function HeroSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  const buttonOpacity = useTransform(scrollY, [0, 200], [1, 0]);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(t);
  }, []);

  const logoSrc = mounted && resolvedTheme === "light" 
    ? "/LogoNEO_horiz_transp (1).png" 
    : "/LogoNEO_horiz_transp_inv.png";

  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center pt-20 pointer-events-none">
      <div className="z-10 mx-auto w-full max-w-7xl px-6 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col items-start text-left pointer-events-auto"
          >
            <h1 className="font-extrabold tracking-tight text-[clamp(3.5rem,8vw,6rem)] leading-[1.1] text-black dark:text-white">
              Mentes Brilhantes <br />
              <span className="text-neo-orange drop-shadow-sm">Crescem Juntas</span>
            </h1>
            <p className="mt-6 max-w-xl text-zinc-900 dark:text-zinc-300 text-[clamp(1.125rem,2.5vw,1.25rem)] leading-relaxed font-medium">
              Descubra a nova era da inovação tecnológica. Nós transformamos ideias em realidade através de excelência e colaboração.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex items-center justify-center md:justify-end pointer-events-auto"
          >
            <Image 
              src={logoSrc}
              alt="NEO Empresarial Logo" 
              width={600} 
              height={200} 
              className="h-auto w-64 drop-shadow-2xl sm:w-80 md:w-full md:max-w-md lg:max-w-lg"
              priority
            />
          </motion.div>

        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="fixed bottom-10 left-1/2 -translate-x-1/2 z-20 pointer-events-auto"
      >
        <motion.div style={{ opacity: buttonOpacity }}>
          <button 
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            className="glass flex items-center justify-center rounded-full px-8 py-3 text-sm sm:text-base font-bold text-white transition-all hover:scale-110 hover:bg-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] animate-bounce"
          >
            Veja mais
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
