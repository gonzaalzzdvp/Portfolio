import GridMotion from "../../components/backgrounds/GridMotion";

import "../../styles/buttons/btn1.css";
import "../../styles/hero.css";
import "../../styles/animations/scale.css";

export default function Hero() {
  const gridImages = [
    "/hero/bg2.jpg",
    "/hero/bg3.jpg",
    "/hero/bg4.jpg",
    "/hero/bg5.jpg",
    "/hero/bg6.jpg",
    "/hero/bg1.jpg",
    "/hero/bg2.jpg",
    "/hero/bg3.jpg",
    "/hero/bg4.jpg",
    "/hero/bg5.jpg",
    "/hero/bg6.jpg",
    "/hero/bg1.jpg",
    "/hero/bg2.jpg",
    "/hero/bg3.jpg",
    "/hero/bg4.jpg",
    "/hero/bg5.jpg",
    "/hero/bg6.jpg",
    "/hero/bg1.jpg",
    "/hero/bg2.jpg",
    "/hero/bg3.jpg",
    "/hero/bg4.jpg",
    "/hero/bg5.jpg",
    "/hero/bg6.jpg",
    "/hero/bg1.jpg",
    "/hero/bg2.jpg",
    "/hero/bg3.jpg",
    "/hero/bg4.jpg",
  ];

  return (
    <section className="hero">
      {/* BACKGROUND */}
      <div className="hero-bg">
        <GridMotion items={gridImages} gradientColor="red" />
      </div>
      <div className="h-full w-full flex flex-col gap-12">
        <div className="w-full flex flex-col gap-4">
          <h1 className="font-bold text-white text-7xl">
            {"Hector Gonzalez".split("").map((char, index) => (
              <span
                key={index}
                className={`hover-scale letter ${char === " " ? "space" : ""}`}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>
          <p className="bitcount text-(--colorYellow) text-5xl z-1">
            GonzaalzzDVP
          </p>
        </div>
        <div className="w-full h-full flex items-center gap-12">
          <a
            aria-label="Thanks"
            className="h-button hover-scale2"
            data-text="CV"
            href="#"
          >
            <span>G</span>
            <span>O</span>
          </a>
          <a
            aria-label="Thanks"
            className="h-button hover-scale2"
            data-text="My Work"
            href="#"
          >
            <span>G</span>
            <span>O</span>
          </a>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <img src="/hero/Me.png" alt="Hector Gonzalez" className="w-70 z-1" />
      </div>
    </section>
  );
}
