"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal, Sparkles, Layers, Cpu, Database, Globe } from "lucide-react";

interface HeroProps {
  currentPersona: "backend" | "fullstack";
  onPersonaChange: (persona: "backend" | "fullstack") => void;
}

export function Hero({ currentPersona, onPersonaChange }: HeroProps) {
  return (
    <section id="hero" className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      {/* Dynamic Background Glow based on Persona */}
      <div
        className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] rounded-full blur-[130px] pointer-events-none transition-all duration-700 ${
          currentPersona === "backend"
            ? "bg-gradient-to-tr from-amber-500/15 via-orange-500/15 to-transparent"
            : "bg-gradient-to-tr from-cyan-500/15 via-blue-500/15 to-transparent"
        }`}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Top Meta Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-white/10 text-xs text-zinc-300 backdrop-blur-md mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
          <span className="font-mono text-zinc-400 text-[11px]">CHENNAI, INDIA</span>
          <span className="text-zinc-600">•</span>
          <span className="text-zinc-300 font-medium">Software Engineer // Full-Stack</span>
        </motion.div>

        {/* Dual Persona Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <div className="inline-flex p-1.5 rounded-2xl bg-zinc-900/80 border border-white/[0.08] backdrop-blur-xl shadow-lg shadow-black/40">
            <button
              onClick={() => onPersonaChange("backend")}
              className={`relative px-4 py-2 rounded-xl text-xs font-medium transition-all duration-300 flex items-center gap-2 ${
                currentPersona === "backend" ? "text-white" : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              {currentPersona === "backend" && (
                <motion.div
                  layoutId="heroPersonaTab"
                  className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/40 rounded-xl shadow-inner"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <Cpu className="w-3.5 h-3.5 text-orange-400 relative z-10" />
              <span className="relative z-10 font-mono">Python & Backend Systems</span>
            </button>

            <button
              onClick={() => onPersonaChange("fullstack")}
              className={`relative px-4 py-2 rounded-xl text-xs font-medium transition-all duration-300 flex items-center gap-2 ${
                currentPersona === "fullstack" ? "text-white" : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              {currentPersona === "fullstack" && (
                <motion.div
                  layoutId="heroPersonaTab"
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/40 rounded-xl shadow-inner"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <Globe className="w-3.5 h-3.5 text-cyan-400 relative z-10" />
              <span className="relative z-10 font-mono">Full-Stack & Next.js AI</span>
            </button>
          </div>
        </motion.div>

        {/* Dynamic Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-6">
            Building{" "}
            {currentPersona === "backend" ? (
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200 bg-clip-text text-transparent">
                high-throughput backend APIs
              </span>
            ) : (
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
                production web applications
              </span>
            )}{" "}
            & resilient cloud services.
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed mb-10 font-normal">
            I am <strong className="text-zinc-100 font-semibold">Abdul Kasim Ajmal Khan</strong>, 
            a software developer with hands-on production experience in{" "}
            <span className="text-zinc-200 underline decoration-amber-500/40 underline-offset-4">Python, FastAPI</span>,{" "}
            <span className="text-zinc-200 underline decoration-cyan-500/40 underline-offset-4">Next.js & React</span>, 
            and asynchronous event worker pipelines with <span className="text-zinc-200">Celery & Redis</span>. 
            Automating admissions CRM, high-volume logistics, and multimodal AI OCR.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-wrap items-center gap-4 mb-16"
        >
          <a
            href="#projects"
            className="px-6 py-3.5 rounded-full bg-white text-zinc-950 font-semibold text-sm hover:bg-zinc-200 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all flex items-center gap-2 group"
          >
            <span>Explore Production Systems</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#contact"
            className="px-6 py-3.5 rounded-full bg-zinc-900 border border-white/10 text-zinc-200 font-medium text-sm hover:border-white/20 hover:text-white transition-all flex items-center gap-2"
          >
            <Terminal className="w-4 h-4 text-zinc-400" />
            <span>Interactive Terminal</span>
          </a>
        </motion.div>

        {/* Live Metrics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-10 border-t border-white/[0.08]"
        >
          <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/50 border border-white/[0.06] backdrop-blur-sm hover:border-white/15 transition-colors">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-white mb-1">100+</div>
            <div className="text-xs font-medium text-zinc-300">Programmatic SSG Hubs</div>
            <div className="text-[11px] text-zinc-500 mt-1">Pre-rendered airport landing routes</div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/50 border border-white/[0.06] backdrop-blur-sm hover:border-white/15 transition-colors">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-amber-400 mb-1">Async</div>
            <div className="text-xs font-medium text-zinc-300">Celery & Redis Queues</div>
            <div className="text-[11px] text-zinc-500 mt-1">Zero-block background worker alerts</div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/50 border border-white/[0.06] backdrop-blur-sm hover:border-white/15 transition-colors">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-cyan-400 mb-1">AI OCR</div>
            <div className="text-xs font-medium text-zinc-300">Gemini & OpenAI Pipelines</div>
            <div className="text-[11px] text-zinc-500 mt-1">Autonomous cheque data extraction</div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/50 border border-white/[0.06] backdrop-blur-sm hover:border-white/15 transition-colors">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-emerald-400 mb-1">Multi-App</div>
            <div className="text-xs font-medium text-zinc-300">Client Portfolio Apps</div>
            <div className="text-[11px] text-zinc-500 mt-1">OnCampusERP, ParcelGo, Rajwaa</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
