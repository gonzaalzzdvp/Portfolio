import { useLayoutEffect, useRef, useState } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";

import AnimatedButton from "../Buttons/AnimatedButton";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef(null);
  const successMessageRef = useRef(null);

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const pageOptions = [
    "Landing Page",
    "Landing Empresarial",
    "Tienda Online",
    "Web Personalizada",
  ];

  const fieldStyles = `
    inline-block
    max-w-full
    px-1
    border-b-2
    border-(--emerald)
    outline-none
    bg-transparent
    text-(--emeraldDepths)
    transition-colors
    focus:border-(--emeraldDepths)
  `;

  /*
  |--------------------------------------------------------------------------
  | GSAP ENTRANCE ANIMATION
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
      | 1. FORM CARD
      |--------------------------------------------------------------------------
      */

      tl.fromTo(
        ".contact-card",
        {
          scale: 0,
          opacity: 1,
          transformOrigin: "center center",
        },
        {
          scale: 1,
          duration: 1.5,
          ease: "power2.inOut",
        },
      );

      /*
      |--------------------------------------------------------------------------
      | 2. LOGO
      |--------------------------------------------------------------------------
      */

      tl.from(
        ".contact-logo",
        {
          scale: 0,
          opacity: 0,
          transformOrigin: "center center",
          duration: 0.8,
          ease: "elastic.out(1, 0.55)",
        },
        "-=0.2",
      );

      /*
      |--------------------------------------------------------------------------
      | 3. HEADING
      |--------------------------------------------------------------------------
      */

      tl.from(
        ".contact-heading",
        {
          scale: 0,
          opacity: 0,
          transformOrigin: "center center",
          duration: 0.8,
          ease: "elastic.out(1, 0.55)",
        },
        "-=0.2",
      );

      /*
      |--------------------------------------------------------------------------
      | 4. FORM
      |--------------------------------------------------------------------------
      */

      tl.from(
        ".contact-form",
        {
          scale: 0,
          opacity: 0,
          transformOrigin: "center center",
          duration: 0.8,
          ease: "elastic.out(1, 0.55)",
        },
        "-=0.2",
      );

      /*
      |--------------------------------------------------------------------------
      | 5. BUTTON
      |--------------------------------------------------------------------------
      */

      tl.from(
        ".contact-button",
        {
          scale: 0,
          opacity: 0,
          transformOrigin: "center center",
          duration: 0.8,
          ease: "elastic.out(1, 0.55)",
        },
        "-=0.2",
      );
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  /*
  |--------------------------------------------------------------------------
  | FORM SUBMIT
  |--------------------------------------------------------------------------
  */

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSubmitting(true);
    setError(false);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xbldqvww", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setSubmitted(true);

      /*
      |--------------------------------------------------------------------------
      | SUCCESS ANIMATION
      |--------------------------------------------------------------------------
      */

      requestAnimationFrame(() => {
        gsap.fromTo(
          successMessageRef.current,
          {
            scale: 0,
            opacity: 0,
            transformOrigin: "center center",
          },
          {
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "elastic.out(1, 0.55)",
          },
        );
      });
    } catch (error) {
      console.error("Formspree error:", error);

      setError(true);
      setSubmitting(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="
        relative
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
        items-center

        overflow-hidden
        bg-(--charcoalBlue)
      "
    >
      {/* ------------------------------------------------------------------ */}
      {/* FORM CARD */}
      {/* ------------------------------------------------------------------ */}

      <div
        className="
          contact-card

          relative
          z-10

          bg-white

          w-full
          max-w-6xl
          max-h-full

          px-5
          sm:px-8
          lg:px-14
          xl:px-20

          py-6
          sm:py-8
          lg:py-10

          flex
          flex-col
          justify-center
          items-center

          gap-5
          sm:gap-7
          lg:gap-10

          rounded-3xl
          overflow-hidden

          shadow-[0_20px_80px_rgba(0,0,0,0.25)]

          before:absolute
          before:w-100
          before:h-100
          before:-top-50
          before:-left-30
          before:rounded-full
          before:bg-(--charcoalBlue)
          before:opacity-30
          before:blur-[100px]
          before:pointer-events-none

          after:absolute
          after:w-100
          after:h-100
          after:-bottom-50
          after:-right-30
          after:rounded-full
          after:bg-(--charcoalBlue)
          after:opacity-40
          after:blur-[100px]
          after:pointer-events-none
        "
      >
        {!submitted ? (
          <>
            {/* ------------------------------------------------------------ */}
            {/* LOGO */}
            {/* ------------------------------------------------------------ */}

            <div
              className="
                contact-logo

                relative
                z-10

                w-full

                text-3xl
                sm:text-4xl
                lg:text-5xl

                font-bold
              "
            >
              Logo
            </div>

            {/* ------------------------------------------------------------ */}
            {/* FORM */}
            {/* ------------------------------------------------------------ */}

            <form
              onSubmit={handleSubmit}
              className="relative z-10 w-full flex flex-col gap-5 sm:gap-7 lg:gap-10"
            >
              {/* HEADING */}

              <div className="contact-heading flex flex-col gap-1 sm:gap-2">
                <div className="text-xs sm:text-sm font-semibold">
                  Get in Touch
                </div>

                <div
                  className="
                    text-lg
                    sm:text-xl
                    lg:text-2xl
                    font-extrabold
                  "
                >
                  ¿Tienes un proyecto en mente? Cuéntame sobre ti.
                </div>
              </div>

              {/* FORM TEXT */}

              <div
                className="
                  contact-form

                  w-full

                  flex
                  flex-wrap
                  items-baseline

                  gap-x-1
                  gap-y-2

                  text-lg
                  sm:text-2xl

                  text-center
                  font-normal
                  leading-relaxed
                "
              >
                <span>Hola, mi nombre es</span>

                <input
                  type="text"
                  name="name"
                  placeholder="Tu nombre"
                  autoComplete="name"
                  required
                  className={`
                    ${fieldStyles}

                    md:w-60
                    sm:w-40

                    text-xl
                    text-center
                  `}
                />

                <span>y mi correo es</span>

                <input
                  type="email"
                  name="_replyto"
                  placeholder="Tu email"
                  autoComplete="email"
                  required
                  className={`
                    ${fieldStyles}

                    w-52
                    md:w-65

                    text-xl
                    text-center
                  `}
                />
                <span>, </span>

                <span>estoy buscando una página</span>

                <select
                  name="project_type"
                  defaultValue=""
                  required
                  className={`
                    ${fieldStyles}

                    w-full
                    sm:w-auto
                    sm:min-w-52
                    lg:w-65

                    text-xl

                    cursor-pointer
                  `}
                >
                  <option value="" disabled>
                    Selecciona una opción
                  </option>

                  {pageOptions.map((page) => (
                    <option key={page} value={page}>
                      {page}
                    </option>
                  ))}
                </select>

                <span>.</span>

                <span>Mi presupuesto es de</span>

                <input
                  type="text"
                  name="budget"
                  placeholder="$2,000"
                  required
                  className={`
                    ${fieldStyles}

                    w-28
                    sm:w-32
                    lg:w-35

                    text-xl

                    text-center
                  `}
                />

                <span>y mi empresa se dedica a</span>

                <input
                  type="text"
                  name="industry"
                  placeholder="Tu industria"
                  required
                  className={`
                    ${fieldStyles}

                    w-40
                    sm:w-52
                    lg:w-65

                    text-xl

                    text-center
                  `}
                />

                <span>!</span>
              </div>

              {/* ERROR */}

              {error && (
                <p className="text-sm text-red-500">
                  Something went wrong. Please try again.
                </p>
              )}

              {/* BUTTON */}

              <div
                className="
                  contact-button

                  relative
                  z-10

                  w-full

                  flex
                  justify-start
                "
              >
                <AnimatedButton
                  text={submitting ? "Sending..." : "Send proposal"}
                  icon={<FontAwesomeIcon icon={faMailBulk} />}
                  bgColor="var(--emerald)"
                  type="submit"
                />
              </div>
            </form>
          </>
        ) : (
          /* -------------------------------------------------------------- */
          /* SUCCESS MESSAGE */
          /* -------------------------------------------------------------- */

          <div
            ref={successMessageRef}
            className="
              relative
              z-10

              w-full
              min-h-75

              flex
              flex-col
              items-center
              justify-center

              text-center
              px-5
            "
          >
            <div
              className="
                text-3xl
                sm:text-4xl
                lg:text-5xl

                font-extrabold
                text-(--emeraldDepths)

                max-w-3xl
              "
            >
              Thank you!
            </div>

            <p
              className="
                mt-4

                text-lg
                sm:text-xl
                lg:text-2xl

                font-medium
                text-(--charcoalBlue)

                max-w-2xl
              "
            >
              We will review your proposal and get back to you shortly.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
