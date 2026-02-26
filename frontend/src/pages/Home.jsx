import Hero from "../components/Hero/Hero";
import AboutMe from "../components/about/AboutMe";
import MyWork from "../components/myWork/MyWork";
import Services from "../components/services/Services";
import Footer from "../components/footer/Footer";

import "../styles/pages/home.css";

export default function Home() {
  return (
    <div className="container bg-(--colorBlack)">
      <section>
        <Hero />
      </section>
      <section>
        <AboutMe />
      </section>
      <section>
        <MyWork />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}
