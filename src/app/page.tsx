"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "../components/Gallery";
import Projects from "@/components/Projects";
import ContactButton from "@/components/ContactButton";
import ScrollToTop from "@/components/ScrollToTop";
import SplashScreen from "@/components/SplashScreen";

export default function Page() {
  const [showSplash, setShowSplash] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasVisited = localStorage.getItem('has-visited-portfolio');
    
    if (!hasVisited) {
      setShowSplash(true);
      localStorage.setItem('has-visited-portfolio', 'true');
    }
    
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return null; // Show nothing while checking localStorage
  }

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Projects />
      <ContactButton />
      <ScrollToTop />
    </main>
  );
}
