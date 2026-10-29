"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Mail, Sparkles, MapPin, Briefcase, CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Ambient Unified Gradient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-[140px] pointer-events-none bg-gradient-to-tr from-amber-500/15 via-orange-500/10 to-cyan-500/15 transition-all duration-700" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Top Meta Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-zinc-900/90 border border-white/10 text-xs text-zinc-300 backdrop-blur-md mb-10 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="font-mono text-zinc-400 text-[11px] uppercase tracking-wider">CHENNAI, INDIA</span>
          <span className="text-zinc-600">•</span>
          <span className="text-zinc-200 font-medium">Software Engineer // Full-Stack</span>
          <span className="text-zinc-600">•</span>
          <span className="text-amber-400 font-mono text-[11px]">Python & Next.js</span>
        </motion.div>

        {/* Hero Grid with Photo Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center mb-16">
          
          {/* Left Column: Headlines & Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-8"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
              Building{" "}
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-cyan-400 bg-clip-text text-transparent">
                scalable backend APIs
              </span>{" "}
              & modern web applications.
            </h1>

            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed mb-8 font-light max-w-2xl">
              I am <strong className="text-zinc-100 font-semibold">Abdul Kasim Ajmal Khan</strong>, 
              a Software Engineer with hands-on production experience in{" "}
              <span className="text-zinc-200 font-medium underline decoration-amber-500/40 underline-offset-4">Python, FastAPI</span>,{" "}
              <span className="text-zinc-200 font-medium underline decoration-cyan-500/40 underline-offset-4">Next.js & React</span>, 
              and asynchronous event worker pipelines with <span className="text-zinc-200 font-medium">Celery & Redis</span>. 
              Automating admissions CRM, high-volume logistics engines, and multimodal AI OCR.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
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
            </div>
          </motion.div>

          {/* Right Column: Professional Candidate Photo Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 flex justify-center lg:justify-end"
          >
            <div className="relative group w-full max-w-[340px]">
              
              {/* Subtle Ambient Border Glow */}
              <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-b from-amber-500/20 via-orange-500/10 to-cyan-500/20 blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Main Photo Card Frame */}
              <div className="relative rounded-[28px] bg-zinc-950/80 border border-white/[0.1] p-3 backdrop-blur-2xl shadow-2xl overflow-hidden">
                
                {/* Photo Container */}
                <div className="relative aspect-square w-full rounded-[20px] overflow-hidden bg-zinc-900 border border-white/[0.06]">
                  <Image
                    src="/profile.jpg"
                    alt="Abdul Kasim Ajmal Khan — Software Engineer"
                    fill
                    sizes="(max-width: 768px) 100vw, 340px"
                    priority
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Subtle Gradient Shade at bottom of image */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-zinc-950/90 via-zinc-950/40 to-transparent pointer-events-none" />

                  {/* Overlaid Status Pill */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Available</span>
                  </div>
                </div>

                {/* Card Bio Bar */}
                <div className="p-4 pt-4">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-white text-base tracking-tight">
                      Abdul Kasim
                    </h3>
                    <span className="text-[11px] font-mono text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/20">
                      SWE
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 mb-3">
                    Python Full-Stack Developer
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
                    <span className="px-2 py-0.5 rounded bg-white/[0.04] text-[10px] font-mono text-zinc-300">
                      Python
                    </span>
                    <span className="px-2 py-0.5 rounded bg-white/[0.04] text-[10px] font-mono text-zinc-300">
                      FastAPI
                    </span>
                    <span className="px-2 py-0.5 rounded bg-white/[0.04] text-[10px] font-mono text-zinc-300">
                      Next.js
                    </span>
                    <span className="px-2 py-0.5 rounded bg-white/[0.04] text-[10px] font-mono text-zinc-300">
                      Celery
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </motion.div>

        </div>

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
