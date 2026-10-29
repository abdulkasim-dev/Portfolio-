"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Mail, Phone, Send, Sparkles } from "lucide-react";

export function ContactConsole() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("abdulkasim.cs@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 relative z-10 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest mb-3">
              <span>05</span>
              <span>//</span>
              <span>TERMINAL CONSOLE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Initiate Direct Connection
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md">
            Open for full-time Software Engineer, Python Developer, or Full-Stack roles (Chennai / Remote / Relocation).
          </p>
        </div>

        {/* 2-Column Terminal & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Terminal Card */}
          <div className="lg:col-span-7 rounded-3xl bg-zinc-950/80 border border-white/[0.08] backdrop-blur-xl overflow-hidden shadow-2xl">
            {/* Window titlebar */}
            <div className="px-5 py-3.5 bg-zinc-900/60 border-b border-white/[0.06] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
              </div>
              <span className="text-[11px] font-mono text-zinc-500">
                zsh — abdulkasim@chennai:~
              </span>
              <div className="w-12"></div>
            </div>

            {/* Terminal Body */}
            <div className="p-6 sm:p-7 space-y-5">
              <div className="flex items-center gap-2 font-mono text-xs">
                <span className="text-amber-400 font-bold">$</span>
                <span className="text-zinc-200">cat engineer_profile.json</span>
              </div>

              <div className="p-4 rounded-xl bg-black/60 border border-white/[0.04] font-mono text-xs text-zinc-300 leading-relaxed overflow-x-auto">
                <span className="text-zinc-600">&#123;</span><br />
                &nbsp;&nbsp;<span className="text-cyan-400">&quot;name&quot;</span>: <span className="text-amber-300">&quot;Abdul Kasim Ajmal Khan&quot;</span>,<br />
                &nbsp;&nbsp;<span className="text-cyan-400">&quot;title&quot;</span>: <span className="text-amber-300">&quot;Software Engineer | Python Full-Stack&quot;</span>,<br />
                &nbsp;&nbsp;<span className="text-cyan-400">&quot;availability&quot;</span>: <span className="text-emerald-400">&quot;Immediate / 2026 Opportunities&quot;</span>,<br />
                &nbsp;&nbsp;<span className="text-cyan-400">&quot;location&quot;</span>: <span className="text-zinc-300">&quot;Chennai, Tamil Nadu, India (Open to Remote)&quot;</span>,<br />
                &nbsp;&nbsp;<span className="text-cyan-400">&quot;email&quot;</span>: <span className="text-amber-300">&quot;abdulkasim.cs@gmail.com&quot;</span>,<br />
                &nbsp;&nbsp;<span className="text-cyan-400">&quot;phone&quot;</span>: <span className="text-zinc-300">&quot;+91 9750902696&quot;</span>,<br />
                &nbsp;&nbsp;<span className="text-cyan-400">&quot;linkedin&quot;</span>: <span className="text-blue-400">&quot;linkedin.com/in/abdulkasim-ajmalkhan&quot;</span><br />
                <span className="text-zinc-600">&#125;</span>
              </div>

              {/* Quick Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 hover:border-amber-400/40 text-xs font-mono text-zinc-200 hover:text-white transition-all group"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-zinc-400 group-hover:text-amber-400 transition-colors" />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>

                <a
                  href="mailto:abdulkasim.cs@gmail.com"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 hover:border-cyan-400/40 text-xs font-mono text-zinc-200 hover:text-white transition-all group"
                >
                  <Mail className="w-4 h-4 text-zinc-400 group-hover:text-cyan-400 transition-colors" />
                  <span>Send Direct Email</span>
                </a>

                <a
                  href="https://linkedin.com/in/abdulkasim-ajmalkhan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 hover:border-blue-400/40 text-xs font-mono text-zinc-200 hover:text-white transition-all group"
                >
                  <svg className="w-4 h-4 fill-zinc-400 group-hover:fill-blue-400 transition-colors" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span>LinkedIn Profile</span>
                </a>

                <a
                  href="tel:+919750902696"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-zinc-900 border border-white/10 hover:border-emerald-400/40 text-xs font-mono text-zinc-200 hover:text-white transition-all group"
                >
                  <Phone className="w-4 h-4 text-zinc-400 group-hover:text-emerald-400 transition-colors" />
                  <span>+91 9750902696</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Message Form */}
          <div className="lg:col-span-5 p-7 sm:p-8 rounded-3xl bg-zinc-900/40 border border-white/[0.08] backdrop-blur-xl">
            <h3 className="text-xl font-bold text-white tracking-tight mb-2">
              Send a Transmission
            </h3>
            <p className="text-xs text-zinc-400 mb-6">
              Discussing an engineering role, technical interview, or project opportunity? Leave a note.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-2">
                  Your Name / Organization
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="e.g. Engineering Lead at Tech Corp"
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-950/70 border border-white/10 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="name@company.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-950/70 border border-white/10 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-2">
                  Opportunity Details
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Describe the role, tech stack, or engineering project..."
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-950/70 border border-white/10 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-amber-400 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-3 rounded-xl bg-white text-zinc-950 font-semibold text-xs tracking-wider uppercase hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
              >
                {status === "sending" ? (
                  <span>Transmitting...</span>
                ) : status === "sent" ? (
                  <span className="text-emerald-700 flex items-center gap-1.5">
                    <Check className="w-4 h-4" /> Message Transmitted!
                  </span>
                ) : (
                  <>
                    <span>Transmit Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>

              {status === "sent" && (
                <motion.p
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs font-mono text-emerald-400 text-center mt-2"
                >
                  ✓ Thank you! Abdul Kasim will respond within 24 hours.
                </motion.p>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
