import { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 1,
    title: "Landing Page",
    link: "basic",
    video: "/Services/landing.mp4",
    color: "--emeraldDepths",
    textColor: "--white",
    buttonColor: "--emerald",
    buttonIcon: "--black",
  },
  {
    id: 2,
    title: "Business Landing",
    link: "business",
    video: "/Services/company.mp4",
    color: "--white",
    textColor: "--black",
    buttonColor: "--emeraldDepths",
    buttonIcon: "--white",
  },
  {
    id: 3,
    title: "Online Shop",
    link: "premium",
    video: "/Services/ecommerce.mp4",
    color: "--black",
    textColor: "--white",
    buttonColor: "--emerald",
    buttonIcon: "--black",
  },
  {
    id: 4,
    title: "Custom Website",
    link: "custom",
    video: "/Services/website.mp4",
    color: "--emerald",
    textColor: "--black",
    buttonColor: "--white",
    buttonIcon: "--black",
  },
];

export default function ServicesSection() {
  const [activeCard, setActiveCard] = useState(1);

  const sectionRef = useRef(null);
  const curtainRefs = useRef({});

  /*
  |--------------------------------------------------------------------------
  | SECTION ENTRANCE ANIMATION
  |--------------------------------------------------------------------------
  */

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const title = sectionRef.current.querySelector(".services-title");
      const cards = sectionRef.current.querySelectorAll(".service-card");

      /*
      |--------------------------------------------------------------------------
      | INITIAL CURTAIN STATE
      |--------------------------------------------------------------------------
      */

      Object.entries(curtainRefs.current).forEach(([id, curtain]) => {
        if (!curtain) return;

        gsap.set(curtain, {
          yPercent: Number(id) === 1 ? -100 : 0,
        });
      });

      /*
      |--------------------------------------------------------------------------
      | INITIAL ENTRANCE STATE
      |--------------------------------------------------------------------------
      */

      gsap.set(title, {
        xPercent: 100,
        opacity: 0,
      });

      gsap.set(cards, {
        scale: 0,
        opacity: 0,
        transformOrigin: "center center",
      });

      /*
      |--------------------------------------------------------------------------
      | ENTRANCE TIMELINE
      |--------------------------------------------------------------------------
      */

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
      | TITLE
      |--------------------------------------------------------------------------
      */

      tl.to(title, {
        xPercent: 0,
        opacity: 1,
        duration: 1,
        ease: "elastic.out(1, 0.55)",
      });

      /*
      |--------------------------------------------------------------------------
      | CARDS
      |--------------------------------------------------------------------------
      */

      tl.to(
        cards,
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "elastic.out(1, 0.55)",
          stagger: 0.16,
        },
        "-=0.4",
      );
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  /*
  |--------------------------------------------------------------------------
  | OPEN CURTAIN
  |--------------------------------------------------------------------------
  */

  const handleMouseEnter = (id) => {
    setActiveCard(id);

    const curtain = curtainRefs.current[id];

    if (!curtain) return;

    gsap.killTweensOf(curtain);

    gsap.to(curtain, {
      yPercent: -100,
      duration: 0.75,
      delay: 0.2,
      ease: "power3.inOut",
    });
  };

  /*
  |--------------------------------------------------------------------------
  | CLOSE CURTAIN
  |--------------------------------------------------------------------------
  */

  const handleMouseLeave = (id) => {
    const curtain = curtainRefs.current[id];

    if (!curtain) return;

    gsap.killTweensOf(curtain);

    gsap.to(curtain, {
      yPercent: 0,
      duration: 0.6,
      ease: "power3.inOut",
    });
  };

  return (
    <section
      ref={sectionRef}
      className="
        services-section
        w-full
        h-screen

        px-5
        sm:px-8
        lg:px-10

        py-6
        sm:py-8
        lg:py-10

        flex
        flex-col
        justify-center

        gap-5
        sm:gap-6
        lg:gap-8

        text-white
      "
    >
      {/* ------------------------------------------------------------------ */}
      {/* TITLE */}
      {/* ------------------------------------------------------------------ */}

      <div className="shrink-0 overflow-visible">
        <h2
          className="
            services-title

            text-3xl
            sm:text-4xl
            lg:text-5xl

            font-bold
          "
        >
          Websites <span className="text-(--emerald)">Services</span>
        </h2>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* SERVICES */}
      {/* ------------------------------------------------------------------ */}

      <div
        className="
          w-full
          flex-1
          min-h-0
          max-h-110

          flex
          flex-col
          lg:flex-row

          items-stretch
          lg:items-center

          gap-3
          lg:gap-4
        "
      >
        {services.map((service) => {
          const isActive = activeCard === service.id;

          return (
            <article
              key={service.id}
              onMouseEnter={() => handleMouseEnter(service.id)}
              onMouseLeave={() => handleMouseLeave(service.id)}
              onClick={() => setActiveCard(service.id)}
              style={{
                backgroundColor: `var(${service.color})`,
              }}
              className={`
                service-card
                group
                relative
                overflow-hidden

                min-h-0

                rounded-3xl
                lg:rounded-4xl

                transition-[flex,height]
                duration-700
                ease-[cubic-bezier(0.22,1,0.36,1)]

                ${isActive ? "flex-[1.8] h-full" : "flex-1 h-full lg:h-[88%]"}
              `}
            >
              {/* ---------------------------------------------------------- */}
              {/* VIDEO */}
              {/* ---------------------------------------------------------- */}

              <video
                src={service.video}
                autoPlay
                muted
                loop
                playsInline
                className="
                  absolute
                  inset-0

                  w-full
                  h-full

                  object-cover
                  scale-105
                "
              />

              {/* ---------------------------------------------------------- */}
              {/* VIDEO GRADIENT */}
              {/* ---------------------------------------------------------- */}

              <div
                className={`
                  absolute
                  inset-0
                  z-[1]

                  bg-gradient-to-t
                  from-black/90
                  via-black/30
                  to-black/5

                  transition-opacity
                  duration-500

                  ${isActive ? "opacity-100" : "opacity-0"}
                `}
              />

              {/* ---------------------------------------------------------- */}
              {/* CURTAIN */}
              {/* ---------------------------------------------------------- */}

              <div
                ref={(element) => {
                  curtainRefs.current[service.id] = element;
                }}
                className="
                  absolute
                  inset-0
                  z-20

                  pointer-events-none
                "
                style={{
                  backgroundColor: `var(${service.color})`,
                }}
              />

              {/* ---------------------------------------------------------- */}
              {/* CONTENT */}
              {/* ---------------------------------------------------------- */}

              <div
                className="
                  relative
                  z-30

                  w-full
                  h-full

                  p-4
                  sm:p-5
                  lg:p-6

                  flex
                  items-center
                  justify-center
                "
              >
                {/* -------------------------------------------------------- */}
                {/* ARROW */}
                {/* -------------------------------------------------------- */}

                <Link
                  to={`/services#${service.link}`}
                  aria-label={`View ${service.title}`}
                  style={{
                    backgroundColor: isActive
                      ? "var(--emerald)"
                      : `var(${service.buttonColor})`,
                    color: isActive
                      ? "var(--black)"
                      : `var(${service.buttonIcon})`,
                  }}
                  className="
                    absolute

                    top-3
                    right-3

                    sm:top-4
                    sm:right-4

                    lg:top-6
                    lg:right-6

                    w-8
                    h-8

                    sm:w-9
                    sm:h-9

                    lg:w-10
                    lg:h-10

                    flex
                    items-center
                    justify-center

                    rounded-full

                    text-sm
                    lg:text-base

                    transition-all
                    duration-500

                    group-hover:scale-110

                    focus:outline-none
                  "
                >
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link>

                {/* -------------------------------------------------------- */}
                {/* TITLE */}
                {/* -------------------------------------------------------- */}

                <h4
                  style={{
                    color: isActive
                      ? "var(--white)"
                      : `var(${service.textColor})`,
                  }}
                  className={`
                    font-semibold
                    text-center
                    leading-tight

                    transition-all
                    duration-700
                    ease-[cubic-bezier(0.22,1,0.36,1)]

                    ${
                      isActive
                        ? `
                          text-2xl
                          sm:text-3xl
                          lg:text-4xl
                          max-w-[85%]
                        `
                        : `
                          text-base
                          sm:text-lg
                          lg:text-lg
                          max-w-[150px]
                          lg:max-w-[110px]
                          break-words
                        `
                    }
                  `}
                >
                  {service.title}
                </h4>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
