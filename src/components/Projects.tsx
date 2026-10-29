"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Layers, ArrowUpRight, Check, Sparkles, Shield, Cpu, Zap } from "lucide-react";

interface ProjectsProps {
  currentPersona: "backend" | "fullstack";
}

const PROJECTS = [
  {
    id: "oncampuserp",
    category: "backend",
    categoryLabel: "ERP & AI FINANCE ENGINE",
    title: "OnCampusERP — Enterprise Campus CRM & AI Cheque OCR",
    client: "Annular Technologies • Live Enterprise Client",
    desc: "Engineered core modules for a university enterprise CRM and admissions automation platform. Designed dynamic multi-step form builders, calculated multi-tier fee installment schedules with late-payment penalty rules, and integrated Google Gemini and OpenAI models for automated cheque OCR verification.",
    metrics: [
      { label: "OCR Verification", val: "Gemini & OpenAI" },
      { label: "Notification Queue", val: "Celery & Redis" },
      { label: "Payment Rules", val: "Zero-error Math" },
    ],
    tags: ["Python", "FastAPI", "Google Gemini API", "OpenAI API", "PostgreSQL", "Celery", "Redis", "React.js"],
    achievements: [
      "Engineered automated cheque OCR processing pipeline utilizing Gemini and OpenAI vision endpoints, reducing manual verification time significantly.",
      "Designed dynamic form schema renderer allowing admissions teams to configure complex registration workflows without code changes.",
      "Implemented asynchronous notification workers using Celery and Redis, sending mission-critical transactional alerts via SendGrid, Twilio, and MSG91.",
      "Built resilient backend business logic for fee installment schedules, concession rules, and late-fee calculations."
    ]
  },
  {
    id: "parcelgoglobal",
    category: "fullstack",
    categoryLabel: "PROGRAMMATIC LOGISTICS & COMMERCE",
    title: "ParcelGoGlobal — 100+ Programmatic Airport Hubs & Razorpay Checkout",
    client: "International Cargo & Logistics Platform",
    desc: "Architected over 100+ programmatically generated, airport-specific landing pages using Next.js Static Site Generation (SSG). Integrated end-to-end Razorpay international payment flows, dynamic currency converter utilities, interactive quotation forms, and automated structured XML sitemap generation.",
    metrics: [
      { label: "Pre-rendered Pages", val: "100+ Hubs" },
      { label: "Payment Gateway", val: "Razorpay" },
      { label: "Technical SEO", val: "XML & JSON-LD" },
    ],
    tags: ["Next.js SSG", "TypeScript", "Tailwind CSS", "Razorpay", "Currency APIs", "Structured Data", "Vercel"],
    achievements: [
      "Architected dynamic routing parameters to generate 100+ localized airport landing pages with pre-rendered static performance.",
      "Integrated Razorpay payment gateway with secure server-side webhook validation and automated currency conversion based on user locale.",
      "Automated dynamic XML sitemap generation and JSON-LD schema markup, solving indexing discrepancies via Google Search Console.",
      "Optimized Core Web Vitals to achieve sub-second page loads on global 3G/4G connections."
    ]
  },
  {
    id: "client-portals",
    category: "fullstack",
    categoryLabel: "MULTI-CLIENT PRODUCTION SUITE",
    title: "Enterprise Client Application Suite (Rajwaa, Epiphany, RCEW, MFDLeap)",
    client: "Multi-Client Commercial Deployments",
    desc: "Maintained, modernized, and deployed high-performance responsive web applications across a portfolio of enterprise clients. Diagnosed and rectified critical runtime bugs involving CORS policies, dynamic routing mismatches, API authentication headers, and multi-environment Vercel deployments.",
    metrics: [
      { label: "Client Brands", val: "8+ Portals" },
      { label: "Uptime & Deploy", val: "Vercel Edge" },
      { label: "Routing & CORS", val: "Zero Conflicts" },
    ],
    tags: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "REST APIs", "Google Search Console", "Git / Vercel"],
    achievements: [
      "Diagnosed and resolved cross-origin resource sharing (CORS) and dynamic routing regressions across decoupled frontend and Python microservices.",
      "Managed production domain configurations, SSL certification, environment variable synchronization, and CI/CD builds on Vercel.",
      "Supported technical SEO and web performance by addressing canonical URL conflicts, sitemap indexing, and viewport layout shifts.",
      "Provided ongoing feature updates, responsive bugfixes, and code maintenance across client web applications."
    ]
  }
];

export function Projects({ currentPersona }: ProjectsProps) {
  const [filter, setFilter] = useState<"all" | "backend" | "fullstack">("all");

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === "all") return true;
    return p.category === filter;
  });

  return (
    <section id="projects" className="py-24 relative z-10 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header with Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest mb-3">
              <span>02</span>
              <span>//</span>
              <span>PRODUCTION SYSTEMS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Commercial Applications
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 bg-zinc-900/90 border border-white/[0.08] p-1.5 rounded-full backdrop-blur-md self-start md:self-auto">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                filter === "all" ? "bg-white text-zinc-950 shadow-sm" : "text-zinc-400 hover:text-white"
              }`}
            >
              All Systems
            </button>
            <button
              onClick={() => setFilter("backend")}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                filter === "backend" ? "bg-orange-500 text-white shadow-sm" : "text-zinc-400 hover:text-white"
              }`}
            >
              Python & APIs
            </button>
            <button
              onClick={() => setFilter("fullstack")}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                filter === "fullstack" ? "bg-cyan-500 text-white shadow-sm" : "text-zinc-400 hover:text-white"
              }`}
            >
              Next.js & Web
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="space-y-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative rounded-3xl bg-zinc-900/50 border border-white/[0.08] p-6 sm:p-9 backdrop-blur-xl hover:border-white/20 transition-all duration-300 group"
              >
                {/* Header row */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-mono tracking-wider text-amber-400 uppercase font-semibold">
                      {project.categoryLabel}
                    </span>
                    <span className="text-zinc-600">•</span>
                    <span className="text-xs text-zinc-400">{project.client}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span className="text-[11px] font-mono text-emerald-400">LIVE SYSTEM</span>
                  </div>
                </div>

                {/* Title & Desc */}
                <div className="max-w-4xl mb-6">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4 group-hover:text-amber-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
                    {project.desc}
                  </p>
                </div>

                {/* Key Metrics Strip */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-zinc-950/60 border border-white/[0.06] mb-8">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="px-3 py-1">
                      <div className="text-[11px] font-mono text-zinc-400 uppercase">{m.label}</div>
                      <div className="text-base sm:text-lg font-bold text-white font-mono mt-0.5">{m.val}</div>
                    </div>
                  ))}
                </div>

                {/* Key Architectural Achievements */}
                <div className="mb-8 space-y-2.5">
                  <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                    Key Architectural Responsibilities:
                  </div>
                  {project.achievements.map((ach, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/[0.08]">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-[11px] font-mono text-zinc-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    <span>Discuss Architecture</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
