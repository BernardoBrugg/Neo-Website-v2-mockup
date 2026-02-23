"use client";

import { motion } from "framer-motion";
import { Target, Eye, Users, Lightbulb, BookOpen, Briefcase, Award } from "lucide-react";

export function AboutSection() {
  const values = [
    { title: "Busca por excelência", icon: Award },
    { title: "Proatividade", icon: Lightbulb },
    { title: "Repasse de conhecimento", icon: BookOpen },
    { title: "Profissionalismo", icon: Briefcase },
    { title: "Cultura de feedback", icon: Users },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1 }
  };

  return (
    <section className="relative z-10 w-full px-4 py-16 sm:px-6 md:py-24 lg:px-8 pointer-events-none">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 md:gap-24">
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6 pointer-events-auto"
        >
          <h2 className="font-extrabold text-[clamp(2.5rem,5vw,4.5rem)] leading-tight text-black dark:text-white"> Nossa <span className="text-neo-orange">História</span></h2>
          <p className="max-w-4xl text-[clamp(1rem,2vw,1.25rem)] leading-relaxed text-zinc-900 dark:text-zinc-300 md:leading-10 font-medium">
            Nossa equipe teve origem em 1980, com a criação do PET Metrologia e Automação, o terceiro programa de educação tutorial do Brasil. Em 2000, o programa começou a desenvolver projetos em parceria com a Fundação CERTI, além de WEG e Embraco, duas das maiores indústrias do país.
            Essas parcerias consolidaram um novo modelo: o PET Empresarial, que cinco anos depois se tornou o NEO Empresarial.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          <motion.div 
            initial={{ opacity: 0, x: -50, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="glass flex flex-col gap-4 rounded-[2rem] p-6 transition-all hover:-translate-y-3 hover:shadow-[0_20px_40px_-15px_rgba(255,107,0,0.15)] sm:p-8 lg:p-10 pointer-events-auto"
          >
            <Target className="h-10 w-10 text-neo-orange sm:h-12 sm:w-12" />
            <h3 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-black dark:text-white">Missão</h3>
            <p className="text-[clamp(0.875rem,2vw,1.125rem)] text-zinc-900 dark:text-zinc-300 md:leading-relaxed font-medium">
               Contribuir para a formação de engenheiros de destacada competência, por meio da realização de projetos técnicos e de atividades de gestão e desenvolvimento pessoal, em parceria com empresas.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50, rotateY: 15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.4 }}
            className="glass flex flex-col gap-4 rounded-[2rem] p-6 transition-all hover:-translate-y-3 hover:shadow-[0_20px_40px_-15px_rgba(255,107,0,0.15)] sm:p-8 lg:p-10 pointer-events-auto"
          >
            <Eye className="h-10 w-10 text-neo-orange sm:h-12 sm:w-12" />
            <h3 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-black dark:text-white">Visão</h3>
            <p className="text-[clamp(0.875rem,2vw,1.125rem)] text-zinc-900 dark:text-zinc-300 md:leading-relaxed font-medium">
               O NEO Empresarial será referência no desenvolvimento de engenheiros gestores, éticos e geradores de soluções inteligentes, que busquem contribuir para a melhoria da sociedade.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col gap-8 pointer-events-auto">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-extrabold text-[clamp(2.5rem,5vw,4.5rem)] leading-tight text-black dark:text-white"
          >
            Nossos <span className="text-neo-orange">Valores</span>
          </motion.h2>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-wrap gap-3 sm:gap-4"
          >
            {values.map((v, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                className="glass flex items-center gap-2 rounded-full px-5 py-3 transition-colors hover:bg-black/5 dark:hover:bg-white/10 sm:gap-3 sm:px-6 sm:py-4 cursor-default"
              >
                <v.icon className="h-5 w-5 text-neo-orange sm:h-6 sm:w-6" />
                <span className="text-sm font-semibold sm:text-base text-black dark:text-white">{v.title}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
