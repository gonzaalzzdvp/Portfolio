import AboutMeSection from "../components/Home/AboutMeSection";
import Contact from "../components/Home/Contact";
import Hero from "../components/Home/Hero";
import Projects from "../components/Home/Projects";
import Reviews from "../components/Home/Reviews";
import ServicesSection from "../components/Home/ServicesSection";
import WorkingProcess from "../components/Home/WorkingProcess";

export default function HomePage() {
  return (
    <main>
      <section id="hero" className="scroll-mt-10">
        <Hero />
      </section>

      <section id="projects" className="scroll-mt-10">
        <Projects />
      </section>

      <section id="services" className="scroll-mt-10">
        <ServicesSection />
      </section>

      <section id="about" className="scroll-mt-10">
        <AboutMeSection />
      </section>

      <section id="process" className="scroll-mt-10">
        <WorkingProcess />
      </section>

      <section id="reviews" className="scroll-mt-10">
        <Reviews />
      </section>

      <section id="contact" className="scroll-mt-10">
        <Contact />
      </section>
    </main>
  );
}
