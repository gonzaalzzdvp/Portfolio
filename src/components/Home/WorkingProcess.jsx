import { useLayoutEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WorkingProcess() {
  const sectionRef = useRef(null);

  const processes = [
    {
      number: "01",
      title: "Discovery",
      description: "We understand your business and needs.",
    },
    {
      number: "02",
      title: "Design",
      description: "We define the structure, content, and functionality.",
    },
    {
      number: "03",
      title: "Development",
      description: "We build the website and its functionality.",
    },
    {
      number: "04",
      title: "Testing",
      description:
        "We verify responsiveness, performance, functionality, and approval.",
    },
    {
      number: "05",
      title: "Launch",
      description:
        "We publish the website and make sure everything is up and running.",
    },
  ];

  /*
  |--------------------------------------------------------------------------
  | ENTRANCE ANIMATION
  |--------------------------------------------------------------------------
  */

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      /*
      |--------------------------------------------------------------------------
      | 1. TITLE
      |--------------------------------------------------------------------------
      */

      tl.from(".working-process-title", {
        scale: 0,
        opacity: 0,
        transformOrigin: "center center",
        duration: 0.9,
        ease: "elastic.out(1, 0.55)",
      });

      /*
      |--------------------------------------------------------------------------
      | 2. PROCESS ITEMS
      |--------------------------------------------------------------------------
      |
      | Each item enters from the right.
      |
      | 01 → 02 → 03 → 04 → 05
      |
      */

      tl.from(
        ".working-process-item",
        {
          x: "100vw",
          duration: 1.2,
          ease: "elastic.out(1, 0.7)",
          stagger: 0.18,
        },
        "-=0.25",
      );

      /*
      |--------------------------------------------------------------------------
      | 3. IMAGE
      |--------------------------------------------------------------------------
      */

      tl.from(
        ".working-process-image",
        {
          scale: 0,
          opacity: 0,
          transformOrigin: "center center",
          duration: 0.9,
          ease: "elastic.out(1, 0.55)",
        },
        "-=0.15",
      );
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full h-screen px-5 sm:px-8 lg:px-10 py-6 sm:py-8 lg:py-10 flex flex-col lg:flex-row justify-center items-center gap-6 sm:gap-8 lg:gap-10 text-white">
      {/* ------------------------------------------------------------------ */}
      {/* IMAGE */}
      {/* ------------------------------------------------------------------ */}

      <div
        className="w-full lg:w-1/2 h-[30%] lg:h-full flex justify-center items-center">
        <img
          src="/WorkingProcess/process1.png"
          alt="Working process"
          className="working-process-image h-full max-h-55 sm:max-h-65 lg:max-h-100 w-auto p-4 object-contain rounded-3xl 
          border border-white"/>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* CONTENT */}
      {/* ------------------------------------------------------------------ */}

      <div
        className="w-full lg:w-1/2 h-[70%] lg:h-full flex flex-col justify-center items-center gap-5 sm:gap-6 lg:gap-8">
        {/* ---------------------------------------------------------------- */}
        {/* TITLE */}
        {/* ---------------------------------------------------------------- */}

        <div className="shrink-0">
          <h2
            className="working-process-title text-3xl sm:text-4xl lg:text-5xl font-bold">
            Working <span className="text-(--emerald)">Process</span>
          </h2>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* PROCESS */}
        {/* ---------------------------------------------------------------- */}

        <div
          className="w-full max-w-2xl flex flex-col gap-2 sm:gap-3">
          {processes.map((process) => (
            <div key={process.number} className="working-process-item w-full">
              <div className="group w-full flex items-center transition-transform duration-300 ease-in-out hover:scale-[1.02]">
                <p className="shrink-0 w-7 sm:w-9 text-lg sm:text-xl lg:text-2xl">
                  0
                  <span className="text-(--emerald)">
                    {process.number.slice(1)}
                  </span>
                </p>

                <div className="flex-1 mx-3 sm:mx-4 lg:mx-6 border-t-2 border-dashed border-(--emerald) scale-x-0 origin-left transition-transform duration-700 ease-out group-hover:scale-x-100" />

                <p className="shrink-0 w-[65%] sm:w-[70%] lg:w-100 flex flex-col text-base sm:text-lg lg:text-2xl">
                  <span className="text-(--emerald) font-semibold">
                    {process.title}
                  </span>

                  <span className="text-xs sm:text-sm lg:text-sm leading-snug">
                    {process.description}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
