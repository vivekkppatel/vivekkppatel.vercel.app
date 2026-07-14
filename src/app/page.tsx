import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Leadership } from "@/components/Leadership";
import { Skills } from "@/components/Skills";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white transition-colors duration-300">
      <Nav />
      <main>
        <Hero />
        <Projects />
        <About />
        <Leadership />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}
