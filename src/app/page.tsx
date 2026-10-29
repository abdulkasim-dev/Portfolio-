"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Specializations } from "@/components/Specializations";
import { Projects } from "@/components/Projects";
import { SkillsMatrix } from "@/components/SkillsMatrix";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { ContactConsole } from "@/components/ContactConsole";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [currentPersona, setCurrentPersona] = useState<"backend" | "fullstack">("backend");

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <Hero 
          currentPersona={currentPersona} 
          onPersonaChange={setCurrentPersona} 
        />
        
        <Specializations />
        
        <Projects 
          currentPersona={currentPersona} 
        />
        
        <SkillsMatrix />
        
        <ExperienceTimeline />
        
        <ContactConsole />
      </main>

      <Footer />
    </div>
  );
}
