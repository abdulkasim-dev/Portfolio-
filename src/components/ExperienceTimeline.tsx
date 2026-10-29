"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 relative z-10 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest mb-3">
              <span>04</span>
              <span>//</span>
              <span>CAREER HISTORY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Experience & Education
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md">
            Commercial software engineering experience building client platforms and core backend logic.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="relative pl-6 sm:pl-8 border-l border-white/[0.08] space-y-12">
          
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Timeline Glowing Node */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-amber-400 border-4 border-[#09090b] shadow-[0_0_12px_rgba(245,158,11,0.6)]"></div>

            <div className="p-7 sm:p-8 rounded-3xl bg-zinc-900/40 border border-white/[0.08] backdrop-blur-xl hover:border-white/15 transition-all">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Python Full Stack Developer
                  </h3>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-amber-400 font-medium mt-1">
                    <span>Annular Technologies</span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-zinc-400 font-normal">
                      <MapPin className="w-3.5 h-3.5" />
                      Chennai, Tamil Nadu, India
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-300">
                  <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                  <span>DECEMBER 2025 — PRESENT</span>
                </div>
              </div>

              <p className="text-sm text-zinc-300 font-light leading-relaxed mb-6">
                Developing and maintaining responsive web applications across multiple enterprise client projects. 
                Integrating backend microservices, streamlining asynchronous task queues, troubleshooting dynamic routing, 
                and executing cloud production updates on Vercel.
              </p>

              <div className="space-y-3 pt-6 border-t border-white/[0.06]">
                <div className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
                  <span>Contributed to <strong>OnCampusERP</strong> features including admissions workflows, dynamic forms, fee installment calculations, late-payment rules, and AI cheque OCR using Google Gemini and OpenAI APIs.</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
                  <span>Implemented asynchronous notification workflows using <strong>Celery and Redis</strong>, integrating SendGrid, Twilio, and MSG91 providers.</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
                  <span>Built <strong>100+ dynamically generated airport landing pages</strong> for ParcelGoGlobal using Next.js Static Site Generation (SSG), automated XML sitemaps, and structured JSON-LD data.</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
                  <span>Integrated <strong>Razorpay payment workflows</strong>, currency conversion APIs, quotation booking forms, and region-customized landing pages.</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
                  <span>Diagnosed and resolved critical issues involving CORS, dynamic routing conflicts, API authentication, and canonical indexing errors via Google Search Console.</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-cyan-400 border-4 border-[#09090b] shadow-[0_0_12px_rgba(6,182,212,0.6)]"></div>

            <div className="p-7 sm:p-8 rounded-3xl bg-zinc-900/40 border border-white/[0.08] backdrop-blur-xl hover:border-white/15 transition-all">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Bachelor of Engineering (B.E.) — Computer Science & Engineering
                  </h3>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-cyan-400 font-medium mt-1">
                    <span>University College of Engineering, BIT Campus</span>
                    <span>•</span>
                    <span className="text-zinc-400 font-normal">Tiruchirappalli, Tamil Nadu, India</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-300">
                  <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                  <span>GRADUATED</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                Comprehensive academic background in core computer science, data structures, algorithms, operating systems, database management systems, and distributed web architecture.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
