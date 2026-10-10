import { Link } from "react-router-dom";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import AnimatedButton from "../Buttons/AnimatedButton";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Projects", href: "#projects" },
  { label: "Service", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkStyles =
    "relative inline-block py-1 text-sm xl:text-[15px] font-medium transition-colors duration-300 hover:text-(--emerald) group";

  const handleNavigation = () => {
    setMenuOpen(false);
  };

  return (
    <nav
      className="
        fixed
        top-0
        left-0
        z-50
        w-full
        h-16
        px-4
        sm:px-6
        md:px-8
        xl:px-10
        flex
        items-center
        justify-between
        text-white
        bg-[#2D3F54]/80
        backdrop-blur-md
        border-b
        border-white/10
      "
    >
      {/* LOGO */}
      <div className="shrink-0">
        <Link
          to="/"
          onClick={handleNavigation}
          className="
            text-xl
            sm:text-2xl
            font-bold
            whitespace-nowrap
            transition-all
            hover:text-3xl
            hover:text-(--emerald)
          "
        >
          Héctor González
        </Link>
      </div>

      {/* DESKTOP NAVIGATION */}
      <ul
        className="
          hidden
          lg:flex
          items-center
          justify-center
          gap-3
          xl:gap-5
          2xl:gap-6
          flex-1
          mx-4
          xl:mx-8
        "
      >
        {navItems.map((item) => (
          <li key={item.label} className="shrink-0">
            <Link
              to={`/${item.href}`}
              className={linkStyles}
              onClick={handleNavigation}
            >
              {item.label}

              <span
                className="
                  absolute
                  left-0
                  -bottom-[5px]
                  h-[2px]
                  w-full
                  origin-left
                  scale-x-0
                  bg-(--emerald)
                  transition-transform
                  duration-300
                  ease-out
                  group-hover:scale-x-100
                "
              />
            </Link>
          </li>
        ))}
      </ul>

      {/* DESKTOP CTA */}
      <div className="hidden lg:flex shrink-0 items-center">
        <AnimatedButton
          text="Get your Web"
          icon={<FontAwesomeIcon icon={faWhatsapp} />}
          bgColor="var(--emerald)"
          height="h-10"
          href={"https://wa.me/584127434416"}
        />
      </div>

      {/* MOBILE MENU BUTTON */}
      <button
        type="button"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((prev) => !prev)}
        className="
          lg:hidden
          shrink-0
          w-10
          h-10
          flex
          flex-col
          items-center
          justify-center
          gap-1.5
          rounded-full
          bg-(--emerald)
          text-black
          cursor-pointer
          transition-transform
          duration-300
          hover:scale-105
        "
      >
        <span
          className={`
            block
            w-5
            h-0.5
            bg-black
            transition-all
            duration-300
            ${menuOpen ? "translate-y-2 rotate-45" : ""}
          `}
        />

        <span
          className={`
            block
            w-5
            h-0.5
            bg-black
            transition-all
            duration-300
            ${menuOpen ? "opacity-0 scale-x-0" : ""}
          `}
        />

        <span
          className={`
            block
            w-5
            h-0.5
            bg-black
            transition-all
            duration-300
            ${menuOpen ? "-translate-y-2 -rotate-45" : ""}
          `}
        />
      </button>

      {/* MOBILE MENU */}
      <div
        className={`
          absolute
          top-16
          left-0
          w-full
          lg:hidden
          bg-[#2D3F54]/95
          backdrop-blur-xl
          border-b
          border-white/10
          shadow-[0_15px_40px_rgba(0,0,0,0.2)]
          transition-all
          duration-300
          ease-out
          ${
            menuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-3 pointer-events-none"
          }
        `}
      >
        <ul
          className="
            w-full
            px-4
            sm:px-6
            md:px-8
            py-4
            sm:py-5
            flex
            flex-col
            gap-1
          "
        >
          {navItems.map((item) => (
            <li key={item.label} className="w-full">
              <Link
                to={`/${item.href}`}
                onClick={handleNavigation}
                className="
                  block
                  w-full
                  px-4
                  py-3
                  rounded-xl
                  text-sm
                  font-medium
                  transition-all
                  duration-300
                  hover:bg-white/5
                  hover:text-(--emerald)
                  active:bg-white/10
                "
              >
                {item.label}
              </Link>
            </li>
          ))}

          <li className="w-full pt-3">
            <AnimatedButton
              text="Get your Web"
              icon={<FontAwesomeIcon icon={faWhatsapp} />}
              bgColor="var(--emerald)"
              height="h-10"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
}
