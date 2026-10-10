import Basic from "../components/ServicesPage/Basic";
import Business from "../components/ServicesPage/Business";
import Hero from "../components/ServicesPage/Hero";
import Premium from "../components/ServicesPage/Premium";
import Custom from "../components/ServicesPage/Custom";

export default function ServicesPage() {
  return (
    <div>
      <section id="service-hero" className="scroll-mt-16">
        <Hero />
      </section>
      <section id="basic" className="scroll-mt-16">
        <Basic />
      </section>
      <section id="business" className="scroll-mt-16">
        <Business />
      </section>
      <section id="premium" className="scroll-mt-16">
        <Premium />
      </section>
      <hr class="h-px my-8 bg-gradient-to-r from-transparent via-gray-400 to-transparent border-0" />

      <section id="custom" className="scroll-mt-16">
        <Custom />
      </section>
    </div>
  );
}
