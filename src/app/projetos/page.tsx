import Link from "next/link";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export default function ProjetosPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 relative overflow-hidden">
      <ThemeToggle />
      <div className="absolute inset-0 bg-background/80 z-0 pointer-events-none" />
      <div className="z-10 flex flex-col items-center gap-6 text-center">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
          Nossos <span className="text-neo-orange">Projetos</span>
        </h1>

        <Link 
          href="/landing"
          className="glass mt-8 rounded-full px-8 py-3 text-sm font-bold text-white transition-all hover:scale-105 hover:bg-white/10 shadow-[0_0_15px_rgba(255,107,0,0.3)] bg-neo-orange/80"
        >
          Voltar para o Início
        </Link>
      </div>
    </main>
  );
}
