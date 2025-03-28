'use client';

import { useSnapScroll } from '@/hooks/useSnapScroll';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  useSnapScroll();

  return (
    <main>
        <Header />
        <Hero id="home" />
        <About id="about" />
        <Projects id="projects" />
        <Skills id="skills" />
        <Contact id="contact" />
        <Footer /> 
    </main>
  );
}