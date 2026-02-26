import GridMotion from "../reactbits/GridMotion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faBriefcase } from "@fortawesome/free-solid-svg-icons";

import "../../styles/buttons/btn1.css";
import "../../styles/hero.css";
import "../../styles/animations/scale.css";

export default function Hero() {
  return (
    <section className="hero rounded-b-4xl">
      {/* BACKGROUND */}
      <div className="hero-bg opacity-40">
        <GridMotion
          items={[
            "https://images.pexels.com/photos/235525/pexels-photo-235525.jpeg?_gl=1*16qrxp6*_ga*MTAyMjE0NDYxLjE3NDA0Mjg3Mjc.*_ga_8JE65Q40S6*czE3NzAzODczNjckbzIzJGcxJHQxNzcwMzg3OTU3JGoyJGwwJGgw",
            "https://images.pexels.com/photos/4064845/pexels-photo-4064845.jpeg?_gl=1*ig4xp3*_ga*MTAyMjE0NDYxLjE3NDA0Mjg3Mjc.*_ga_8JE65Q40S6*czE3NzAzODczNjckbzIzJGcxJHQxNzcwMzg3ODYxJGoxNiRsMCRoMA..",
            "https://images.pexels.com/photos/5836/yellow-metal-design-decoration.jpg?_gl=1*biirj4*_ga*MTAyMjE0NDYxLjE3NDA0Mjg3Mjc.*_ga_8JE65Q40S6*czE3NzAzODczNjckbzIzJGcxJHQxNzcwMzg3Nzg2JGoyOCRsMCRoMA..",
            "https://www.publicdomainpictures.net/pictures/120000/nahled/white-texture-background.jpg",
            "https://images.pexels.com/photos/235525/pexels-photo-235525.jpeg?_gl=1*16qrxp6*_ga*MTAyMjE0NDYxLjE3NDA0Mjg3Mjc.*_ga_8JE65Q40S6*czE3NzAzODczNjckbzIzJGcxJHQxNzcwMzg3OTU3JGoyJGwwJGgw",
            "https://images.pexels.com/photos/4064845/pexels-photo-4064845.jpeg?_gl=1*ig4xp3*_ga*MTAyMjE0NDYxLjE3NDA0Mjg3Mjc.*_ga_8JE65Q40S6*czE3NzAzODczNjckbzIzJGcxJHQxNzcwMzg3ODYxJGoxNiRsMCRoMA..",
            "https://images.pexels.com/photos/5836/yellow-metal-design-decoration.jpg?_gl=1*biirj4*_ga*MTAyMjE0NDYxLjE3NDA0Mjg3Mjc.*_ga_8JE65Q40S6*czE3NzAzODczNjckbzIzJGcxJHQxNzcwMzg3Nzg2JGoyOCRsMCRoMA..",
            "https://www.publicdomainpictures.net/pictures/120000/nahled/white-texture-background.jpg",
            "https://images.pexels.com/photos/235525/pexels-photo-235525.jpeg?_gl=1*16qrxp6*_ga*MTAyMjE0NDYxLjE3NDA0Mjg3Mjc.*_ga_8JE65Q40S6*czE3NzAzODczNjckbzIzJGcxJHQxNzcwMzg3OTU3JGoyJGwwJGgw",
            "https://images.pexels.com/photos/4064845/pexels-photo-4064845.jpeg?_gl=1*ig4xp3*_ga*MTAyMjE0NDYxLjE3NDA0Mjg3Mjc.*_ga_8JE65Q40S6*czE3NzAzODczNjckbzIzJGcxJHQxNzcwMzg3ODYxJGoxNiRsMCRoMA..",
            "https://images.pexels.com/photos/5836/yellow-metal-design-decoration.jpg?_gl=1*biirj4*_ga*MTAyMjE0NDYxLjE3NDA0Mjg3Mjc.*_ga_8JE65Q40S6*czE3NzAzODczNjckbzIzJGcxJHQxNzcwMzg3Nzg2JGoyOCRsMCRoMA..",
            "https://www.publicdomainpictures.net/pictures/120000/nahled/white-texture-background.jpg",
            "https://images.pexels.com/photos/235525/pexels-photo-235525.jpeg?_gl=1*16qrxp6*_ga*MTAyMjE0NDYxLjE3NDA0Mjg3Mjc.*_ga_8JE65Q40S6*czE3NzAzODczNjckbzIzJGcxJHQxNzcwMzg3OTU3JGoyJGwwJGgw",
            "https://images.pexels.com/photos/4064845/pexels-photo-4064845.jpeg?_gl=1*ig4xp3*_ga*MTAyMjE0NDYxLjE3NDA0Mjg3Mjc.*_ga_8JE65Q40S6*czE3NzAzODczNjckbzIzJGcxJHQxNzcwMzg3ODYxJGoxNiRsMCRoMA..",
            "https://images.pexels.com/photos/5836/yellow-metal-design-decoration.jpg?_gl=1*biirj4*_ga*MTAyMjE0NDYxLjE3NDA0Mjg3Mjc.*_ga_8JE65Q40S6*czE3NzAzODczNjckbzIzJGcxJHQxNzcwMzg3Nzg2JGoyOCRsMCRoMA..",
            "https://www.publicdomainpictures.net/pictures/120000/nahled/white-texture-background.jpg",
            "https://images.pexels.com/photos/235525/pexels-photo-235525.jpeg?_gl=1*16qrxp6*_ga*MTAyMjE0NDYxLjE3NDA0Mjg3Mjc.*_ga_8JE65Q40S6*czE3NzAzODczNjckbzIzJGcxJHQxNzcwMzg3OTU3JGoyJGwwJGgw",
            "https://images.pexels.com/photos/4064845/pexels-photo-4064845.jpeg?_gl=1*ig4xp3*_ga*MTAyMjE0NDYxLjE3NDA0Mjg3Mjc.*_ga_8JE65Q40S6*czE3NzAzODczNjckbzIzJGcxJHQxNzcwMzg3ODYxJGoxNiRsMCRoMA..",
            "https://images.pexels.com/photos/5836/yellow-metal-design-decoration.jpg?_gl=1*biirj4*_ga*MTAyMjE0NDYxLjE3NDA0Mjg3Mjc.*_ga_8JE65Q40S6*czE3NzAzODczNjckbzIzJGcxJHQxNzcwMzg3Nzg2JGoyOCRsMCRoMA..",
            "https://www.publicdomainpictures.net/pictures/120000/nahled/white-texture-background.jpg",
            "https://images.pexels.com/photos/235525/pexels-photo-235525.jpeg?_gl=1*16qrxp6*_ga*MTAyMjE0NDYxLjE3NDA0Mjg3Mjc.*_ga_8JE65Q40S6*czE3NzAzODczNjckbzIzJGcxJHQxNzcwMzg3OTU3JGoyJGwwJGgw",
            "https://images.pexels.com/photos/4064845/pexels-photo-4064845.jpeg?_gl=1*ig4xp3*_ga*MTAyMjE0NDYxLjE3NDA0Mjg3Mjc.*_ga_8JE65Q40S6*czE3NzAzODczNjckbzIzJGcxJHQxNzcwMzg3ODYxJGoxNiRsMCRoMA..",
            "https://images.pexels.com/photos/5836/yellow-metal-design-decoration.jpg?_gl=1*biirj4*_ga*MTAyMjE0NDYxLjE3NDA0Mjg3Mjc.*_ga_8JE65Q40S6*czE3NzAzODczNjckbzIzJGcxJHQxNzcwMzg3Nzg2JGoyOCRsMCRoMA..",
            "https://www.publicdomainpictures.net/pictures/120000/nahled/white-texture-background.jpg",
            "https://images.pexels.com/photos/235525/pexels-photo-235525.jpeg?_gl=1*16qrxp6*_ga*MTAyMjE0NDYxLjE3NDA0Mjg3Mjc.*_ga_8JE65Q40S6*czE3NzAzODczNjckbzIzJGcxJHQxNzcwMzg3OTU3JGoyJGwwJGgw",
            "https://images.pexels.com/photos/4064845/pexels-photo-4064845.jpeg?_gl=1*ig4xp3*_ga*MTAyMjE0NDYxLjE3NDA0Mjg3Mjc.*_ga_8JE65Q40S6*czE3NzAzODczNjckbzIzJGcxJHQxNzcwMzg3ODYxJGoxNiRsMCRoMA..",
            "https://images.pexels.com/photos/5836/yellow-metal-design-decoration.jpg?_gl=1*biirj4*_ga*MTAyMjE0NDYxLjE3NDA0Mjg3Mjc.*_ga_8JE65Q40S6*czE3NzAzODczNjckbzIzJGcxJHQxNzcwMzg3Nzg2JGoyOCRsMCRoMA..",
            "https://www.publicdomainpictures.net/pictures/120000/nahled/white-texture-background.jpg",
            "https://images.pexels.com/photos/235525/pexels-photo-235525.jpeg?_gl=1*16qrxp6*_ga*MTAyMjE0NDYxLjE3NDA0Mjg3Mjc.*_ga_8JE65Q40S6*czE3NzAzODczNjckbzIzJGcxJHQxNzcwMzg3OTU3JGoyJGwwJGgw",
            "https://images.pexels.com/photos/4064845/pexels-photo-4064845.jpeg?_gl=1*ig4xp3*_ga*MTAyMjE0NDYxLjE3NDA0Mjg3Mjc.*_ga_8JE65Q40S6*czE3NzAzODczNjckbzIzJGcxJHQxNzcwMzg3ODYxJGoxNiRsMCRoMA..",
          ]}
          gradientColor="black"
        />
      </div>
      <div className="h-full w-full flex flex-col gap-12">
        <div className="w-full flex flex-col items-center gap-4">
          <h1 className="bg-(--colorBlack) py-2 px-6 rounded-2xl font-bold text-white text-8xl">
            {"Hector Gonzalez".split("").map((char, index) => (
              <span
                key={index}
                className={`hover-scale letter ${char === " " ? "space" : ""}`}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>
          <p className="bitcount bg-(--colorBlack) py-2 px-6 rounded-2xl text-(--colorYellow) text-6xl z-1">
            GonzaalzzDVP
          </p>
        </div>
        <div className="w-full h-full flex items-center justify-center gap-12">
          <a
            aria-label="Thanks"
            className="h-button hover-scale2"
            data-text="CV"
            href="#"
          >
            <span>
              <FontAwesomeIcon icon={faFile} className="text-2xl" />
            </span>
          </a>
          <a
            aria-label="Thanks"
            className="h-button hover-scale2"
            data-text="My Work"
            href="#"
          >
            <span><FontAwesomeIcon icon={faBriefcase} className="text-2xl" /></span>
          </a>
        </div>
      </div>
      {/* <div className="w-full flex justify-center items-center">
        <img src="/hero/Me.png" alt="Hector Gonzalez" className="w-70 z-1" />
      </div> */}
    </section>
  );
}
