"use client";

import { motion } from "framer-motion";
import { Server, Layout, Zap, CheckCircle2 } from "lucide-react";

const SPECS = [
  {
    icon: Server,
    color: "from-orange-500/20 to-amber-500/20",
    borderHover: "hover:border-orange-500/30",
    iconColor: "text-orange-400",
    tag: "BACKEND ARCHITECTURE",
    title: "High-Throughput APIs & Async Pipelines",
    desc: "Architecting asynchronous RESTful services in Python and FastAPI. Handling transactional financial rules, complex installment algorithms, and decoupled event messaging.",
    bullets: [
      "FastAPI asynchronous request lifecycle",
      "Celery distributed tasks & Redis queues",
      "PostgreSQL relational modeling & MongoDB",
      "API Auth (JWT), CORS & security policies"
    ]
  },
  {
    icon: Layout,
    color: "from-cyan-500/20 to-blue-500/20",
    borderHover: "hover:border-cyan-500/30",
    iconColor: "text-cyan-400",
    tag: "FRONTEND & WEB SYSTEMS",
    title: "Modern Next.js & Programmatic SSG",
    desc: "Building high-performance web applications with React 19, Next.js, and TypeScript. Specializing in programmatic generation of high-traffic landing pages with automated SEO.",
    bullets: [
      "Static Site Generation (SSG) & Dynamic Routes",
      "100+ automated airport logistics landing hubs",
      "Technical SEO, XML sitemaps & Schema markup",
      "Tailwind CSS responsive design systems"
    ]
  },
  {
    icon: Zap,
    color: "from-emerald-500/20 to-teal-500/20",
    borderHover: "hover:border-emerald-500/30",
    iconColor: "text-emerald-400",
    tag: "AI WORKFLOWS & PAYMENTS",
    title: "Multimodal AI OCR & Payment Gateways",
    desc: "Integrating state-of-the-art LLMs and financial APIs. Automating banking instrument data capture and deploying multi-currency payment checkout flows.",
    bullets: [
      "Google Gemini & OpenAI Vision OCR cheque parsing",
      "Razorpay international payment gateway integration",
      "Real-time currency conversion calculation",
      "Multi-channel notifications (Twilio, SendGrid, MSG91)"
    ]
  }
];

export function Specializations() {
  return (
    <section id="specialization" className="py-24 relative z-10 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest mb-3">
              <span>01</span>
              <span>//</span>
              <span>ARCHITECTURAL PILLARS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Core Engineering Focus
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md">
            Specialized in bridging high-performance Python backends with modern Next.js client experiences.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SPECS.map((spec, idx) => {
            const Icon = spec.icon;
            return (
              <motion.div
                key={spec.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`relative p-8 rounded-3xl bg-zinc-900/40 border border-white/[0.08] backdrop-blur-xl ${spec.borderHover} transition-all duration-300 group flex flex-col justify-between`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${spec.color} border border-white/10 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform`}>
                    <Icon className={`w-5 h-5 ${spec.iconColor}`} />
                  </div>

                  <span className="text-[11px] font-mono tracking-wider text-zinc-400 uppercase block mb-2">
                    {spec.tag}
                  </span>

                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                    {spec.title}
                  </h3>

                  <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                    {spec.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/[0.06] space-y-2.5">
                  {spec.bullets.map((b) => (
                    <div key={b} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-zinc-500 mt-0.5 shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
