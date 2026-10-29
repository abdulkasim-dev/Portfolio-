"use client";

import { motion } from "framer-motion";
import { Code2, Server, Layout, Database, Bot, Wrench } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    icon: Code2,
    title: "Programming Languages",
    color: "text-amber-400",
    skills: ["Python (Core)", "JavaScript (ES6+)", "TypeScript", "SQL", "HTML5 & CSS3"]
  },
  {
    icon: Server,
    title: "Backend & Asynchronous",
    color: "text-orange-400",
    skills: ["FastAPI", "RESTful APIs", "Celery Task Queue", "Redis Pub/Sub", "JWT Auth", "CORS & Security"]
  },
  {
    icon: Layout,
    title: "Frontend Architecture",
    color: "text-cyan-400",
    skills: ["React.js", "Next.js (App & Pages)", "Static Site Gen (SSG)", "Tailwind CSS", "Responsive UI", "State Management"]
  },
  {
    icon: Database,
    title: "Databases & In-Memory",
    color: "text-emerald-400",
    skills: ["PostgreSQL", "MongoDB", "Redis Cache", "Schema Design", "Relational Queries"]
  },
  {
    icon: Bot,
    title: "AI & External Integrations",
    color: "text-purple-400",
    skills: ["Google Gemini API", "OpenAI Vision API", "Razorpay Payment Gateway", "Twilio API", "SendGrid", "MSG91"]
  },
  {
    icon: Wrench,
    title: "DevOps & Engineering Tools",
    color: "text-blue-400",
    skills: ["Git & GitHub", "Vercel Deployments", "Google Search Console", "XML Sitemaps", "JSON-LD Schema", "Browser DevTools"]
  }
];

export function SkillsMatrix() {
  return (
    <section id="skills" className="py-24 relative z-10 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest mb-3">
              <span>03</span>
              <span>//</span>
              <span>TECHNICAL MATRIX</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Skills & Tooling Stack
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md">
            Production-tested technologies applied across client projects, cloud infrastructure, and AI integrations.
          </p>
        </div>

        {/* 6 Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-6 rounded-3xl bg-zinc-900/40 border border-white/[0.08] backdrop-blur-xl hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                    <Icon className={`w-4 h-4 ${cat.color}`} />
                  </div>
                  <h3 className="font-semibold text-sm tracking-tight text-zinc-100">
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-zinc-950/70 border border-white/[0.06] text-xs font-mono text-zinc-300 hover:text-white hover:border-amber-400/30 transition-colors"
                    >
                      {skill}
                    </span>
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
