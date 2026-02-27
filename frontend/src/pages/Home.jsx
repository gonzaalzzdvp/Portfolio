import Hero from "../components/Hero/Hero";
import AboutMe from "../components/about/AboutMe";
import MyWork from "../components/myWork/MyWork";
import Services from "../components/services/Services";
import Footer from "../components/footer/Footer";

import "../styles/pages/home.css";

export default function Home() {
  return (
    <div className="w-full bg-(--colorBlack)
        lg:h-screen
        lg:overflow-x-hidden
        lg:snap-y
        lg:snap-mandatory
        lg:scroll-smooth
        ">
      <section className="lg:h-screen lg:snap-start">
        <Hero />
      </section>
      <section className="lg:h-screen lg:snap-start">
        <AboutMe />
      </section>
      <section className="lg:h-screen lg:snap-start">
        <MyWork />
      </section>
      <section className="lg:h-screen lg:snap-start">
        <Services />
      </section>
      <section className="lg:h-screen lg:snap-start">
        <Footer />
      </section>
    </div>
  );
}
