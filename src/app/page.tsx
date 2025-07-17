import Header from "./components/header";
import Hero from "./components/hero";
import { About } from "./components/about";
import Services from "./components/services";
import Projects from "./components/projects";
import Testimonials from "./components/testimonials";
import FAQ from "./components/faq";
import Footer from "./components/footer";


export default function Home() {
  return (
    <>
     <main className="bg-white text-zinc-900 min-h-screen">
      <Header />
        <Hero />
        <About />
        <Services />
        <Projects />
        <Testimonials />
        <FAQ />
        <Footer />
      </main>
    </>
  );
}
