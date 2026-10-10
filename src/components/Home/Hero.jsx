import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiagramProject, faGlobe } from "@fortawesome/free-solid-svg-icons";

import AnimatedButton from "../Buttons/AnimatedButton";

export default function Hero() {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // 1. TÍTULO
      tl.from(".hero-title", {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // 2. DESCRIPCIÓN
      tl.from(
        ".hero-description",
        {
          y: 80,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "+=0",
      );

      // 3. BOTONES
      tl.from(
        ".hero-button",
        {
          scale: 0,
          opacity: 0,
          duration: 0.8,
          ease: "elastic.out(1, 0.45)",
          stagger: 0.15,
        },
        "+=0",
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={heroRef}
      className="
        w-full
        min-h-screen
        flex
        flex-col
        justify-center
        items-center
        gap-10
        text-white
      "
    >
      {/* TITLE */}
      <div className="hero-title">
        <h1 className="flex flex-col justify-center items-center">
          <span className="text-2xl">Bienvenido 👋, desarrollo</span>

          <span className="font-bold text-7xl text-(--emerald)">
            Sitios Web Modernos
          </span>

          <span className="text-2xl">que ayudan a</span>

          <span className="font-bold text-7xl">Crecer Negocios</span>
        </h1>
      </div>

      {/* DESCRIPTION */}
      <div className="hero-description">
        <p className="text-xl font-light">
          Creo experiencias web rapidas y funcionales utilizando tecnologias
          modernas
        </p>
      </div>

      {/* BUTTONS */}
      <div className="flex justify-center items-center gap-5">
        <div className="hero-button">
          <AnimatedButton
            text="Get your web"
            icon={<FontAwesomeIcon icon={faGlobe} />}
            bgColor="var(--emerald)"
            href="/services"
          />
        </div>

        <div className="hero-button">
          <AnimatedButton
            text="View Projects"
            icon={<FontAwesomeIcon icon={faDiagramProject} />}
            bgColor="var(--emerald)"
            href="#projects"
          />
        </div>
      </div>
    </div>
  );
}
