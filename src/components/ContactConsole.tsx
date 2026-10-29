"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight, Copy, Check, MapPin, Phone } from "lucide-react";

export function ContactConsole() {
  const [copied, setCopied] = useState(false);

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

  return (
    <section id="contact" className="py-24 relative z-10 border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest mb-3">
            <span>05</span>
            <span>//</span>
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-light">
            I am currently open to full-time Software Engineer, Python Developer, or Full-Stack roles (Chennai / Remote / Relocation). Feel free to reach out directly.
          </p>
        </div>

        {/* 2 Primary Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          
          {/* LinkedIn Card */}
          <motion.a
            href="https://linkedin.com/in/abdulkasim-ajmalkhan"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative p-8 rounded-3xl bg-zinc-900/50 border border-white/[0.08] backdrop-blur-xl hover:border-blue-500/40 hover:bg-zinc-900/80 transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 text-blue-400 group-hover:scale-105 transition-transform">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>

              <span className="text-[11px] font-mono tracking-wider text-zinc-400 uppercase block mb-1">
                PROFESSIONAL NETWORK
              </span>
              <h3 className="text-xl font-bold text-white mb-2">
                LinkedIn Profile
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                Connect with me on LinkedIn to view recommendations, professional updates, and network.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between text-xs sm:text-sm font-medium text-blue-400 group-hover:text-blue-300 transition-colors">
              <span className="font-mono">linkedin.com/in/abdulkasim-ajmalkhan</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </motion.a>

          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative p-8 rounded-3xl bg-zinc-900/50 border border-white/[0.08] backdrop-blur-xl hover:border-amber-500/40 hover:bg-zinc-900/80 transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-6 text-amber-400 group-hover:scale-105 transition-transform">
                <Mail className="w-5 h-5" />
              </div>

              <span className="text-[11px] font-mono tracking-wider text-zinc-400 uppercase block mb-1">
                DIRECT INBOX
              </span>
              <h3 className="text-xl font-bold text-white mb-2">
                Email Address
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                Send a direct email for hiring inquiries, technical discussions, or interview schedules.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
              <a
                href="mailto:abdulkasim.cs@gmail.com"
                className="text-xs sm:text-sm font-medium font-mono text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1.5"
              >
                <span>abdulkasim.cs@gmail.com</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="px-3 py-1.5 rounded-lg bg-zinc-800/80 hover:bg-zinc-800 text-xs font-mono text-zinc-300 hover:text-white transition-all flex items-center gap-1.5 border border-white/[0.06]"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

        </div>

        {/* Secondary Info Strip */}
        <div className="p-6 rounded-2xl bg-zinc-900/30 border border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400 font-mono">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-zinc-500" />
            <span>Chennai, Tamil Nadu, India • Open to Worldwide Remote</span>
          </div>

          <a
            href="tel:+919750902696"
            className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors"
          >
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>+91 9750902696</span>
          </a>
        </div>

      </div>
    </section>
  );
}
