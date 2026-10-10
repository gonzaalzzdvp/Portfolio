import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

import {
  faCss,
  faGithub,
  faGithubSquare,
  faHtml5,
  faInstagramSquare,
  faJs,
  faNode,
  faPostgresql,
  faPython,
  faReact,
  faSquareLinkedin,
  faTailwindCss,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import BuildMyApp from "./BuildMyApp";

gsap.registerPlugin(ScrollTrigger, SplitText);

const technologies = [
  {
    name: "Python",
    icon: faPython,
    color: "hover:text-[#3776AB]",
  },
  {
    name: "React",
    icon: faReact,
    color: "hover:text-[#61DAFB]",
  },
  {
    name: "Tailwind",
    icon: faTailwindCss,
    color: "hover:text-[#06B6D4]",
  },
  {
    name: "PostgreSQL",
    icon: faPostgresql,
    color: "hover:text-[#4169E1]",
  },
  {
    name: "Node.js",
    icon: faNode,
    color: "hover:text-[#68A063]",
  },
  {
    name: "GitHub",
    icon: faGithub,
    color: "hover:text-white",
  },
  {
    name: "HTML5",
    icon: faHtml5,
    color: "hover:text-[#E34F26]",
  },
  {
    name: "CSS3",
    icon: faCss,
    color: "hover:text-[#1572B6]",
  },
  {
    name: "JavaScript",
    icon: faJs,
    color: "hover:text-[#F7DF1E]",
  },
];

const aboutLetters = [
  { letter: "A", color: "--emerald" },
  { letter: "b", color: "--emeraldDepths" },
  { letter: "o", color: "--charcoalBlue" },
  { letter: "u", color: "--black" },
  { letter: "t", color: "--emerald" },
  { letter: " ", color: null },
  { letter: "M", color: "--emeraldDepths" },
  { letter: "e", color: "--charcoalBlue" },
];

export default function AboutMeSection() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const split = SplitText.create(".about-description-text", {
        type: "words",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      // 1. About Me
      tl.to(".about-card-reveal", {
        scaleX: 0,
        transformOrigin: "right center",
        duration: 0.7,
        ease: "power3.inOut",
      });

      // 2. Image
      tl.to(
        ".about-image-reveal",
        {
          scaleY: 0,
          transformOrigin: "center top",
          duration: 0.7,
          ease: "power3.inOut",
        },
        "+=0.08",
      );

      // 3. Technologies
      tl.to(
        ".about-technologies-reveal",
        {
          scaleY: 0,
          transformOrigin: "center bottom",
          duration: 0.7,
          ease: "power3.inOut",
        },
        "+=0.08",
      );

      // 4. Description Reveal
      tl.to(
        ".about-description-reveal",
        {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 0.7,
          ease: "power3.inOut",
        },
        "+=0.08",
      );

      // 5. Hold & Drag
      tl.to(
        ".about-build-reveal",
        {
          scaleY: 0,
          transformOrigin: "center top",
          duration: 0.7,
          ease: "power3.inOut",
        },
        "+=0.08",
      );

      // 6. Socials
      tl.from(
        ".about-social",
        {
          scale: 0,
          opacity: 0,
          transformOrigin: "center center",
          duration: 0.55,
          ease: "back.out(1.7)",
          stagger: 0.25,
        },
        "+=0.08",
      );

      // 7. Description Flip Board
      tl.from(
        split.words,
        {
          rotationX: -90,
          transformOrigin: "50% 0%",
          opacity: 0,
          stagger: 0.08,
          duration: 0.12,
          ease: "power2.out",
        },
        "+=0.15",
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="
            about-section
            w-full
            h-screen
            p-10
            grid
            grid-cols-4
            gap-6
            text-white

            grid-rows-[10.5rem_9.25rem_9.25rem]
        "
    >
      {/* About Me */}
      <div
        className="
          about-card
          relative
          bg-white
          col-start-1
          col-end-3
          flex
          justify-center
          items-center
          text-(--emeraldDepths)
          rounded-3xl
          overflow-hidden
        "
      >
        <h5
          className="
            text-9xl
            anton-regular
            flex
            items-center
          "
        >
          {aboutLetters.map((item, index) =>
            item.letter === " " ? (
              <span key={index} className="w-8">
                &nbsp;
              </span>
            ) : (
              <span
                key={index}
                style={{
                  "--letter-color": `var(${item.color})`,
                }}
                className="
                  inline-block
                  transition-all
                  duration-300
                  ease-out
                  hover:scale-100
                  hover:text-(--letter-color)
                  hover:-translate-y-2
                  cursor-pointer
                "
              >
                {item.letter}
              </span>
            ),
          )}
        </h5>

        {/* Reveal mask */}
        <div
          className="
            about-card-reveal
            absolute
            inset-0
            z-20
            bg-(--charcoalBlue)
            origin-right
          "
        />
      </div>

      {/* Image */}
      <div
        className="
          about-image
          relative
          col-start-3
          row-start-1
          row-end-3
          rounded-3xl
          overflow-hidden
          group
        "
      >
        <img
          src="/AboutMe/Me.png"
          alt="Mafer"
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            object-center
            transition-transform
            duration-700
            ease-out
            group-hover:scale-110
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/80
            via-black/20
            to-transparent
            opacity-80
            transition-opacity
            duration-500
            group-hover:opacity-100
          "
        />

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            p-6
            z-10
            translate-y-2
            transition-transform
            duration-500
            group-hover:translate-y-0
          "
        >
          <span className="text-2xl font-semibold">Hello, friend!</span>
        </div>

        {/* Reveal mask */}
        <div
          className="
            about-image-reveal
            absolute
            inset-0
            z-20
            bg-(--charcoalBlue)
            origin-top
          "
        />
      </div>

      {/* Description */}
      <div
        className="
          about-description
          relative
          bg-(--emeraldDepths)
          p-7
          col-start-3
          row-start-3
          row-end-4
          flex
          items-center
          rounded-3xl
          overflow-hidden
        "
      >
        <p className="about-description-text text-sm leading-relaxed text- text-center font-mono whitespace-normal">
          "I design and develop modern, functional websites, combining
          creativity, technology, and strategy to turn ideas into digital
          experiences."
        </p>

        {/* Reveal mask */}
        <div
          className="
            about-description-reveal
            absolute
            inset-0
            z-20
            bg-(--charcoalBlue)
            origin-left
          "
        />
      </div>

      {/* Instagram */}
      <div
        className="
          about-social
          w-full
          col-start-4
          flex
          items-center
          justify-center
          rounded-3xl
        "
      >
        <a href="https://instagram.com/gonzaalzz.91" target="_blank">
          <FontAwesomeIcon
            icon={faInstagramSquare}
            className="
              text-9xl
              hover:text-pink-500
              text-white
              transition-all
              duration-300
              hover:scale-110
            "
          />
        </a>
      </div>

      {/* Technologies */}
      <div
        className="
          about-technologies
          relative
          bg-black
          p-4
          col-start-1
          row-start-2
          row-end-4
          flex
          flex-col
          gap-3
          rounded-3xl
          overflow-hidden
        "
      >
        <div className="w-full text-center">
          <h5 className="text-xl font-semibold">Technologies</h5>
        </div>

        <div
          className="
            w-full
            h-full
            grid
            grid-cols-3
            justify-items-center
            items-center
          "
        >
          {technologies.map((technology) => (
            <div
              key={technology.name}
              title={technology.name}
              className={`
                w-12
                h-12
                flex
                justify-center
                items-center
                rounded-xl
                text-5xl
                text-white/60
                cursor-pointer
                transition-all
                duration-300
                hover:scale-125
                hover:bg-white/5
                ${technology.color}
              `}
            >
              <FontAwesomeIcon icon={technology.icon} />
            </div>
          ))}
        </div>

        {/* Reveal mask */}
        <div
          className="
            about-technologies-reveal
            absolute
            inset-0
            z-20
            bg-(--charcoalBlue)
            origin-bottom
          "
        />
      </div>

      {/* Build My App */}
      <div
        className="
          about-build
          relative
          col-start-2
          row-start-2
          row-end-4
          flex
          justify-center
          items-center
          rounded-3xl
          overflow-hidden
        "
      >
        <BuildMyApp />

        {/* Reveal mask */}
        <div
          className="
            about-build-reveal
            absolute
            inset-0
            z-20
            bg-(--charcoalBlue)
            origin-top
          "
        />
      </div>

      {/* LinkedIn */}
      <div
        className="
          about-social
          w-full
          col-start-4
          row-start-2
          row-end-3
          flex
          items-center
          justify-center
          rounded-3xl
        "
      >
        <a href="https://linkedin.com/hectorlgonzalez91/" target="_blank">
          <FontAwesomeIcon
            icon={faSquareLinkedin}
            className="
              text-9xl
              text-white
              hover:text-blue-500
              transition-all
              duration-300
              hover:scale-110
            "
          />
        </a>
      </div>

      {/* GitHub */}
      <div
        className="
          about-social
          w-full
          col-start-4
          row-start-3
          row-end-4
          flex
          items-center
          justify-center
          rounded-3xl
        "
      >
        <a href="https://github.com/gonzaalzzdvp/" target="_blank">
          <FontAwesomeIcon
            icon={faGithubSquare}
            className="
              hover:text-black
              text-white
              text-9xl
              transition-all
              duration-300
              hover:scale-110
            "
          />
        </a>
      </div>
    </div>
  );
}
