"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Specializations } from "@/components/Specializations";
import { Projects } from "@/components/Projects";
import { SkillsMatrix } from "@/components/SkillsMatrix";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { ContactConsole } from "@/components/ContactConsole";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Specializations />
        <Projects />
        <SkillsMatrix />
        <ExperienceTimeline />
        <ContactConsole />
      </main>

      <Footer />
    </div>
  );
}
