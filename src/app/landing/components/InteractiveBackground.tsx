"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface ParticleStyle {
  size: number;
  startX: number;
  startY: number;
  duration: number;
  y: number[];
  x: number[];
  delay: number;
}

export function InteractiveBackground() {
  const [particles] = useState<ParticleStyle[]>(() => 
    Array.from({ length: 30 }).map(() => ({
      size: Math.random() * 6 + 2,
      startX: Math.random() * 100,
      startY: Math.random() * 100,
      duration: Math.random() * 10 + 10,
      y: [0, Math.random() * -200 - 50],
      x: [0, (Math.random() - 0.5) * 100],
      delay: Math.random() * 5,
    }))
  );

  return (
    <div suppressHydrationWarning className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-neo-orange blur-2xl"
          style={{
            width: `${p.size * 5}px`,
            height: `${p.size * 5}px`,
            top: `${p.startY}%`,
            left: `${p.startX}%`,
            opacity: 0.1,
          }}
          animate={{
            y: p.y,
            x: p.x,
            opacity: [0.1, 0.4, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}
