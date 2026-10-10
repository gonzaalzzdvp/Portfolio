import { useLayoutEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

gsap.registerPlugin(ScrollTrigger);

const technologies = ["Django", "React", "Tailwind", "Sql"];

const projects = [
  {
    id: 1,
    name: "BlumeCare",
    image: "/Projects/blume.png",
    year: "2026",
    featured: true,
    link: "https://www.blumecareve.com",
  },
  {
    id: 2,
    name: "Fusión Creativa 360",
    image: "/Projects/fusion.png",
    year: "2026",
    featured: false,
    link: "https://fusioncreativa360.com",
  },
  {
    id: 3,
    name: "Ingproseg",
    image: "/Projects/ingproseg.png",
    year: "2025",
    featured: false,
    link: "https://ingproseg.onrender.com",
  },
  {
    id: 4,
    name: "Boom Agency",
    image: "/Projects/boom.png",
    year: "2024",
    featured: false,
    link: "https://boomagency.onrender.com",
  },
];

export default function Projects() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".projects-section",
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      /*
      |--------------------------------------------------------------------------
      | 1. TITLE
      |--------------------------------------------------------------------------
      */

      tl.from(".projects-title", {
        xPercent: 100,
        opacity: 0,
        duration: 1,
        ease: "elastic.out(1, 0.55)",
      });

      /*
      |--------------------------------------------------------------------------
      | 2. FEATURED PROJECT
      |--------------------------------------------------------------------------
      */

      tl.from(
        ".featured-project",
        {
          scale: 0,
          opacity: 0,
          transformOrigin: "center center",
          duration: 0.9,
          ease: "elastic.out(1, 0.55)",
        },
        "-=0.45",
      );

      /*
      |--------------------------------------------------------------------------
      | 3. SECONDARY PROJECTS
      |--------------------------------------------------------------------------
      */

      tl.from(
        ".secondary-project",
        {
          scale: 0,
          opacity: 0,
          transformOrigin: "center center",
          duration: 0.75,
          ease: "elastic.out(1, 0.55)",
          stagger: 0.18,
        },
        "-=0.25",
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="
        projects-section
        w-full
        min-h-screen

        px-5
        sm:px-8
        lg:px-10

        py-6
        sm:py-8
        lg:py-10

        flex
        flex-col
        justify-center

        gap-4
        sm:gap-5
        lg:gap-6

        text-(--emeraldDepths)
      "
    >
      {/* TITLE */}

      <div className="shrink-0">
        <h2
          className="
            projects-title

            text-3xl
            sm:text-4xl
            lg:text-5xl

            font-bold
            text-white
          "
        >
          Featured <span className="text-(--emerald)">Projects</span>
        </h2>
      </div>

      {/* PROJECTS GRID */}

      <div
        className="
          w-full
          flex-1
          min-h-0

          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3

          grid-rows-[1.2fr_repeat(3,1fr)]
          md:grid-rows-[1.2fr_repeat(2,1fr)]
          lg:grid-rows-2

          gap-3
          sm:gap-4
          lg:gap-5
        "
      >
        {projects.map((project) => {
          const isFeatured = project.featured;

          /*
          |--------------------------------------------------------------------------
          | FEATURED PROJECT
          |--------------------------------------------------------------------------
          */

          if (isFeatured) {
            return (
              <article
                key={project.id}
                className="
                  featured-project

                  w-full
                  min-h-80

                  flex
                  flex-col
                  sm:flex-row

                  md:col-span-2
                  lg:col-span-3

                  rounded-3xl
                  overflow-hidden
                  group
                "
              >
                {/* IMAGE */}

                <div
                  className="
                    relative
                    w-full
                    sm:w-1/2

                    h-1/2
                    sm:h-full

                    bg-white
                    overflow-hidden
                  "
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="
                      w-full
                      h-full

                      object-cover
                      object-top

                      transition-transform
                      duration-700
                      ease-out

                      group-hover:scale-110
                    "
                  />
                </div>

                {/* INFO */}

                <div
                  className="
                    w-full
                    sm:w-1/2

                    h-1/2
                    sm:h-full

                    bg-white

                    p-3
                    sm:p-4
                    lg:p-5

                    flex
                    flex-col
                    justify-between

                    gap-2
                  "
                >
                  <h4
                    className="
                      text-xl
                      sm:text-2xl
                      lg:text-3xl

                      font-extrabold
                    "
                  >
                    {project.name}
                  </h4>

                  <p
                    className="
                      text-xs
                      sm:text-sm
                      lg:text-base

                      leading-relaxed

                      line-clamp-3
                      lg:line-clamp-4
                    "
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Vitae facilis quam tempore magnam quisquam numquam,
                    recusandae ducimus aliquid ab voluptatum libero.
                  </p>

                  {/* TECHNOLOGIES */}

                  <div className="w-full flex flex-wrap gap-2">
                    {technologies.map((technology) => (
                      <span
                        key={technology}
                        className="
                          bg-(--emeraldDepths)
                          text-white

                          px-2.5
                          sm:px-3
                          lg:px-4

                          py-1

                          text-xs
                          sm:text-sm

                          rounded-full

                          transition-all
                          duration-300

                          hover:bg-white
                          hover:text-(--emeraldDepths)
                          hover:shadow-[0_0_15px_var(--emerald)]
                        "
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* YEAR + BUTTON */}

                  <div className="flex justify-between items-center">
                    <p
                      className="
                        font-bold
                        text-xl
                        sm:text-2xl
                      "
                    >
                      {project.year}
                    </p>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${project.name}`}
                      className="
                        shrink-0

                        w-9
                        h-9
                        sm:w-10
                        sm:h-10
                        lg:w-11
                        lg:h-11

                        flex
                        items-center
                        justify-center

                        rounded-full

                        bg-(--emerald)
                        text-black

                        text-base
                        sm:text-lg
                        lg:text-xl

                        transition-all
                        duration-300

                        cursor-pointer

                        hover:bg-white
                        hover:scale-110
                        hover:shadow-[0_0_18px_var(--emerald)]
                      "
                    >
                      <FontAwesomeIcon icon={faArrowRight} />
                    </a>
                  </div>
                </div>
              </article>
            );
          }

          /*
          |--------------------------------------------------------------------------
          | SECONDARY PROJECTS
          |--------------------------------------------------------------------------
          */

          return (
            <article
              key={project.id}
              className="
                secondary-project

                w-full
                h-full
                min-h-80

                flex
                flex-col

                rounded-3xl
                overflow-hidden

                group
              "
            >
              {/* IMAGE */}

              <div
                className="
                  relative

                  w-full
                  flex-1
                  min-h-0

                  bg-white
                  rounded-t-3xl
                  overflow-hidden
                "
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="
                    w-full
                    h-full

                    object-cover
                    object-top

                    transition-transform
                    duration-700
                    ease-out

                    group-hover:scale-110
                  "
                />

                {/* MASK */}

                <div
                  className="
                    absolute
                    inset-0

                    bg-black/70

                    opacity-0

                    transition-opacity
                    duration-500

                    group-hover:opacity-100
                  "
                />

                {/* TITLE */}

                <h4
                  className="
                    absolute
                    inset-0

                    flex
                    items-center
                    justify-center

                    px-5

                    text-center
                    text-(--emerald)

                    text-xl
                    sm:text-2xl
                    lg:text-3xl

                    font-bold

                    opacity-0
                    translate-y-4

                    transition-all
                    duration-500

                    group-hover:opacity-100
                    group-hover:translate-y-0
                  "
                >
                  {project.name}
                </h4>
              </div>

              {/* INFO */}

              <div
                className="
                  shrink-0

                  bg-white
                  w-full

                  p-3
                  sm:p-4

                  flex
                  flex-col
                  justify-between

                  gap-3

                  rounded-b-3xl
                "
              >
                {/* TECHNOLOGIES */}

                <div className="w-full flex flex-wrap gap-2">
                  {technologies.map((technology) => (
                    <span
                      key={technology}
                      className="
                        bg-(--emeraldDepths)
                        text-white

                        px-2.5
                        sm:px-3
                        lg:px-4

                        py-1

                        text-xs
                        sm:text-sm

                        rounded-full

                        transition-all
                        duration-300

                        hover:bg-white
                        hover:text-(--emeraldDepths)
                        hover:shadow-[0_0_15px_var(--emerald)]
                      "
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* YEAR + BUTTON */}

                <div className="flex justify-between items-center">
                  <p
                    className="
                      text-xl
                      sm:text-2xl
                      lg:text-3xl

                      font-extrabold
                    "
                  >
                    {project.year}
                  </p>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.name}`}
                    className="
                      shrink-0

                      w-9
                      h-9
                      sm:w-10
                      sm:h-10
                      lg:w-11
                      lg:h-11

                      flex
                      items-center
                      justify-center

                      rounded-full

                      bg-(--emerald)
                      text-black

                      text-base
                      sm:text-lg
                      lg:text-xl

                      transition-all
                      duration-300

                      cursor-pointer

                      hover:bg-white
                      hover:scale-110
                      hover:shadow-[0_0_18px_var(--emerald)]
                    "
                  >
                    <FontAwesomeIcon icon={faArrowRight} />
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
