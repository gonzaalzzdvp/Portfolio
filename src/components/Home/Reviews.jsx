import { useLayoutEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    id: 1,
    name: "Barry W.",
    role: "CEO of Techless",
    rating: 5,
    comment:
      "Really useful system. We got amazing service for our team and the hotel bookings for our events run smoothly.",
    image: "/reviews/user1.png",
    variant: "white",
    position: "top-left",
    rotation: "-rotate-6",
  },
  {
    id: 2,
    name: "Maria M.",
    role: "CEO",
    rating: 5,
    comment:
      "Nimbus lets us launch new features in hours, not days. Total game-changer.",
    image: "/reviews/user2.png",
    variant: "emerald",
    position: "center",
    rotation: "rotate-2",
  },
  {
    id: 3,
    name: "Luis C.",
    role: "Operations Manager",
    rating: 5,
    comment:
      "They helped streamline our workflow in just a few weeks. The team is super easy to work with, and we have seen a major boost in productivity.",
    image: "/reviews/user1.png",
    variant: "emeraldDepths",
    position: "top-right",
    rotation: "rotate-6",
  },
  {
    id: 4,
    name: "Antonio Y.",
    role: "Entrepreneur",
    rating: 5,
    comment:
      "The design, the attention to detail, and the support throughout the process were outstanding. Highly recommend!",
    image: "/reviews/user3.png",
    variant: "black",
    position: "bottom-left",
    rotation: "-rotate-8",
  },
  {
    id: 5,
    name: "Glennis Y.",
    role: "Marketing Director",
    rating: 5,
    comment:
      "We evaluated eight platforms before landing on Nimbus. It wasn't just the feature set, it was the pace of updates and the team behind it.",
    image: "/reviews/user3.png",
    variant: "charcoalBlue",
    position: "bottom-right",
    rotation: "rotate-6",
  },
];

const cardVariants = {
  white: {
    card: "bg-white text-black",
    stars: "text-(--emerald)",
    divider: "border-black/20",
    muted: "text-black/60",
  },

  emerald: {
    card: "bg-(--emerald) text-white",
    stars: "text-white",
    divider: "border-white/30",
    muted: "text-white/70",
  },

  emeraldDepths: {
    card: "bg-(--emeraldDepths) text-white",
    stars: "text-white",
    divider: "border-white/30",
    muted: "text-white/70",
  },

  black: {
    card: "bg-black text-white",
    stars: "text-(--emerald)",
    divider: "border-white/20",
    muted: "text-white/60",
  },

  charcoalBlue: {
    card: "bg-(--charcoalBlue) text-white",
    stars: "text-white",
    divider: "border-white/20",
    muted: "text-white/60",
  },
};

const cardPositions = {
  "top-left": "left-[18%] top-[18%]",
  center: "left-[40%] top-[30%]",
  "top-right": "right-[18%] top-[15%]",
  "bottom-left": "left-[23%] bottom-[8%]",
  "bottom-right": "right-[22%] bottom-[5%]",
};

const entranceDirections = [
  { x: "-100vw", y: 0 },
  { x: 0, y: "-100vh" },
  { x: "100vw", y: 0 },
  { x: 0, y: "100vh" },
  { x: "100vw", y: "100vh" },
];

export default function Reviews() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".review-card");

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

      tl.from(".reviews-title", {
        scale: 0,
        opacity: 0,
        transformOrigin: "center center",
        duration: 0.9,
        ease: "elastic.out(1, 0.55)",
      });

      /*
      |--------------------------------------------------------------------------
      | REVIEW CARDS
      |--------------------------------------------------------------------------
      */

      cards.forEach((card, index) => {
        const direction = entranceDirections[index];

        tl.fromTo(
          card,
          {
            x: direction.x,
            y: direction.y,
            rotation: index % 2 === 0 ? 1080 : -1080,
            opacity: 1,
          },
          {
            x: 0,
            y: 0,
            rotation: 0,
            duration: 1.4,
            ease: "power3.out",
          },
          index === 0 ? "-=0.25" : "-=1.05",
        );
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        w-full
        min-h-screen

        px-10
        pt-24
        pb-10

        flex
        flex-col
        items-center

        text-white
        overflow-hidden
      "
    >
      {/* ------------------------------------------------------------------ */}
      {/* TITLE */}
      {/* ------------------------------------------------------------------ */}

      <div className="reviews-title text-center shrink-0">
        <h2 className="text-5xl font-bold">
          What our <span className="text-(--emerald)">clients</span> say
        </h2>

        <p className="mt-3 text-lg text-white/60">
          Real people. Real projects. Real results.
        </p>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* CARDS */}
      {/* ------------------------------------------------------------------ */}

      <div className="relative w-full max-w-[1000px] flex-1">
        {reviews.map((review) => {
          const variant = cardVariants[review.variant];

          return (
            <article
              key={review.id}
              className={`
                review-card
                absolute

                w-[250px]
                h-[280px]

                ${cardPositions[review.position]}

                cursor-pointer
                hover:z-50
                ${review.id === 2 ? "z-30" : "z-10"}
              `}
            >
              <div
                className={`
                  w-full
                  h-full

                  p-6
                  rounded-2xl

                  ${review.rotation}
                  ${variant.card}

                  shadow-2xl

                  transition-transform
                  duration-500
                  ease-out

                  hover:z-50
                  hover:scale-110
                  hover:rotate-0
                  hover:shadow-[0_25px_60px_rgba(0,0,0,0.45)]
                `}
              >
                {/* Rating */}

                <div className="flex gap-1 text-lg text-yellow-500">
                  {Array.from({ length: review.rating }).map((_, index) => (
                    <FontAwesomeIcon key={index} icon={faStar} />
                  ))}
                </div>

                {/* Comment */}

                <p className="mt-5 text-sm leading-relaxed">{review.comment}</p>

                {/* Divider */}

                <div
                  className={`
                    mt-5
                    border-t
                    ${variant.divider}
                  `}
                />

                {/* User */}

                <div className="mt-4 flex items-center gap-3">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-10 h-10 rounded-lg object-cover"
                  />

                  <div>
                    <h3 className="text-sm font-semibold">{review.name}</h3>

                    <span className={`text-xs ${variant.muted}`}>
                      {review.role}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
