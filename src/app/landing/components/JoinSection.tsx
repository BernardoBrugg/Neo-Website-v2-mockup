"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function JoinSection() {
  return (
    <section className="relative z-10 w-full px-4 py-16 sm:px-6 md:py-24 lg:px-8 pointer-events-none">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
        className="glass pointer-events-auto mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-[3rem] p-10 text-center shadow-2xl sm:gap-8 sm:p-14 md:p-20 bg-white/20 dark:bg-black/20"
      >
        <h2 className="font-extrabold text-[clamp(2.5rem,5vw,5.5rem)] leading-tight text-black dark:text-white">Faça parte do <span className="text-neo-orange drop-shadow-sm">NEO!</span></h2>
        <p className="max-w-2xl text-[clamp(1rem,2vw,1.25rem)] text-zinc-900 dark:text-zinc-300 md:leading-relaxed font-medium">
          Veja mais detalhes a respeito do nosso processo seletivo e se junte a nós para construir a tecnologia do futuro.
        </p>
        <button className="group mt-4 flex items-center gap-2 rounded-full bg-neo-orange px-8 py-4 text-base font-extrabold text-black transition-all hover:scale-105 hover:bg-orange-400 sm:mt-6 sm:px-10 sm:py-5 sm:text-lg shadow-lg hover:shadow-orange-500/50">
          Saiba Mais <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2 sm:h-6 sm:w-6" />
        </button>
      </motion.div>
    </section>
  );
}
