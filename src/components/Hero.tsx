"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Sparkles, Cpu, Globe, Server, Zap } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      {/* Ambient Unified Gradient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] rounded-full blur-[140px] pointer-events-none bg-gradient-to-tr from-amber-500/15 via-orange-500/10 to-cyan-500/15 transition-all duration-700" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Top Meta Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-zinc-900/90 border border-white/10 text-xs text-zinc-300 backdrop-blur-md mb-8 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="font-mono text-zinc-400 text-[11px] uppercase tracking-wider">CHENNAI, INDIA</span>
          <span className="text-zinc-600">•</span>
          <span className="text-zinc-200 font-medium">Full-Stack Software Engineer</span>
          <span className="text-zinc-600">•</span>
          <span className="text-amber-400 font-mono text-[11px]">Python & Next.js</span>
        </motion.div>

        {/* Unified Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-6">
            Building{" "}
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-cyan-400 bg-clip-text text-transparent">
              scalable backend APIs
            </span>{" "}
            & modern web applications.
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 max-w-3xl leading-relaxed mb-10 font-normal">
            I am <strong className="text-zinc-100 font-semibold">Abdul Kasim Ajmal Khan</strong>, 
            a Software Engineer with hands-on production experience engineering end-to-end applications across{" "}
            <span className="text-zinc-200 font-medium underline decoration-amber-500/40 underline-offset-4">Python, FastAPI</span>,{" "}
            <span className="text-zinc-200 font-medium underline decoration-cyan-500/40 underline-offset-4">Next.js & React</span>, 
            and asynchronous event worker pipelines with <span className="text-zinc-200 font-medium">Celery & Redis</span>. 
            Automating admissions CRM, high-volume logistics engines, and multimodal AI OCR.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
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
            <Mail className="w-4 h-4 text-zinc-400" />
            <span>Get in Touch</span>
          </a>
        </motion.div>

        {/* Live Metrics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
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
