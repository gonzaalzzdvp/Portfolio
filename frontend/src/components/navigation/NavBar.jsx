import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "../../styles/navBar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedinIn,
  faFacebookF,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faAnglesRight, faBarsStaggered, faBackward } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* BOTÓN ABRIR (solo cuando está cerrado) */}
      {!isOpen && (
        <button className="btnToggle btnOpen" onClick={() => setIsOpen(true)}>
          <FontAwesomeIcon icon={faBarsStaggered} />
        </button>
      )}

      <aside className={`principal ${isOpen ? "open" : "closed"}`}>
        <div className="w-full flex items-center gap-4">
          {/* BOTÓN CERRAR */}
          {isOpen && (
            <button
              className="btnToggle btnClose"
              onClick={() => setIsOpen(false)}
            >
              <FontAwesomeIcon icon={faBackward} />
            </button>
          )}

          <h2 className="bitcount text-xl text-(--colorBlue)">
            <Link to="/" className="text-2xl">GonzaalzzDVP</Link>
          </h2>
        </div>

        <div>
          <ul>
            <li>
              <Link className="hover-scale2 w-full py-2 px-4 flex justify-between items-center hover:bg-slate-300 hover:rounded-2xl" to="/login">
                <span>Login</span> <button className="btnGo">Go</button>
              </Link>
            </li>
            <li>
              <Link className="hover-scale2 w-full py-2 px-4 flex justify-between items-center  hover:bg-slate-300 hover:rounded-2xl" to="/register">
                <span>Register</span> <button className="btnGo">Go</button>
              </Link>
            </li>
          </ul>
        </div>

        <hr />

        <div>
          <ul className="links">
            <li>
              <Link className="hover-scale2 w-full flex justify-center items-center gap-2">
                <span>Contact</span> <FontAwesomeIcon icon={faAnglesRight} />
              </Link>
            </li>
            <li>
              <Link className="hover-scale2 w-full flex justify-center items-center gap-2">
                <span>My work</span> <FontAwesomeIcon icon={faAnglesRight} />
              </Link>
            </li>
            <li>
              <Link className="hover-scale2 w-full flex justify-center items-center gap-2">
                <span>About Me</span> <FontAwesomeIcon icon={faAnglesRight} />
              </Link>
            </li>
            <li>
              <Link className="hover-scale2 w-full flex justify-center items-center gap-2">
                <span>Other</span> <FontAwesomeIcon icon={faAnglesRight} />
              </Link>
            </li>
          </ul>
        </div>

        <div className="socials">
          <p>Socials</p>
          <a target="_blank" href={'http://www.Instagram.com'} className="hover-scale icon">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a target="_blank" href={'http://www.Linkedin.com'} className="hover-scale icon">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a target="_blank" href={'http://www.Facebook.com'} className="hover-scale icon">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a target="_blank" href={'http://www.X.com'} className="hover-scale icon">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
        </div>
      </aside>
    </>
  );
}
