"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";

export function Header() {
  const { scrollY } = useScroll();
  const headerY = useTransform(scrollY, [0, 200], ["-100%", "0%"]);
  
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(t);
  }, []);

  const logoSrc = mounted && resolvedTheme === "light" 
    ? "/LogoNEO_horiz_transp (1).png" 
    : "/LogoNEO_horiz_transp_inv.png";

  return (
    <motion.header
      style={{ y: headerY }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-40 flex items-center justify-between gap-8 px-6 py-3 glass rounded-full shadow-lg border border-white/10"
    >
      <Link href="/landing" className="flex items-center">
        {mounted && (
          <Image
            src={logoSrc}
            alt="NEO Logo"
            width={100}
            height={32}
            className="h-6 w-auto object-contain transition-transform hover:scale-105"
          />
        )}
      </Link>
      
      <nav className="hidden sm:flex items-center gap-6 text-sm font-medium">
        <Link href="/projetos" className="text-zinc-600 hover:text-neo-orange dark:text-zinc-300 dark:hover:text-neo-orange transition-colors">
          Projetos
        </Link>
        <Link href="/sobre" className="text-zinc-600 hover:text-neo-orange dark:text-zinc-300 dark:hover:text-neo-orange transition-colors">
          Sobre
        </Link>
        <Link href="/contato" className="text-zinc-600 hover:text-neo-orange dark:text-zinc-300 dark:hover:text-neo-orange transition-colors">
          Contato
        </Link>
      </nav>
    </motion.header>
  );
}
