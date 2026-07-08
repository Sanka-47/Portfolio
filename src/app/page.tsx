import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden bg-background text-foreground">
      {/* Ambient Mesh Backgrounds */}
      <div className="fixed inset-0 mesh-bg -z-20" />
      <div className="fixed inset-0 mesh-grid opacity-30 -z-10" />

      {/* Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-1 flex flex-col w-full relative">
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
