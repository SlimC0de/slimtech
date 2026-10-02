import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Services from "../components/Services";
import About from "../components/About";
import TechStack from "../components/TechStack";
import Process from "../components/Process";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <Services />
      <About />
      <TechStack />
      <Process />
      <CTA />
      <Footer />
    </div>
  );
}