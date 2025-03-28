import Header from "@/components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Test from "@/components/Test";

export default function Home() {
  return (
    <main>
        <Header />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer /> 
     </main>
    // <h1>Hi</h1>
    // <Test/>
  );
}