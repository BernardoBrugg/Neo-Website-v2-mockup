"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(t);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed right-6 top-6 z-50 rounded-full bg-background/50 p-3 shadow-lg backdrop-blur-md transition-all hover:scale-110 hover:bg-white/20 dark:hover:bg-white/10"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-6 w-6 text-neo-orange" />
      ) : (
        <Moon className="h-6 w-6 text-neo-orange" />
      )}
    </button>
  );
}
