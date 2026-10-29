"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Terminal, Sparkles } from "lucide-react";

const NAV_LINKS = [
  { name: "Specialization", href: "#specialization" },
  { name: "Production", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Terminal", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-[#09090b]/80 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl shadow-black/50"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center font-mono font-bold text-sm text-amber-400 group-hover:border-amber-400/50 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.25)] transition-all">
            AK
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm tracking-tight text-zinc-100 group-hover:text-white transition-colors">
              Abdul Kasim
            </span>
            <span className="text-[11px] font-mono text-zinc-500 tracking-wider">
              SOFTWARE ENGINEER
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-900/60 border border-white/[0.08] px-3 py-1.5 rounded-full backdrop-blur-md">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-3.5 py-1.5 text-xs font-medium tracking-wide transition-colors ${
                  isActive ? "text-white" : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-white/10 rounded-full border border-white/10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Status Pill & Action */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Open for Roles</span>
          </div>

          <a
            href="#contact"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-100 text-zinc-900 font-semibold text-xs hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] transition-all"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white"
          aria-label="Toggle Navigation"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#09090b]/95 backdrop-blur-2xl border-b border-white/[0.08] px-6 py-6"
          >
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm text-zinc-300 hover:text-white hover:bg-white/[0.05] transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>Available for 2026 roles</span>
                </div>
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-2 rounded-full bg-zinc-100 text-zinc-900 font-semibold text-xs"
                >
                  Contact
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
