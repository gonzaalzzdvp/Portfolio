import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faLinkedinIn,
  faFacebookF,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

import "../../styles/buttons/btn2.css";
import "../../styles/about.css";

export default function AboutMe() {
  return (
    <div className="min-h-screen w-full py-24 px-24 bg-(--colorBlack) flex flex-col justify-center items-center gap-6">
      <div className="w-full flex flex-col justify-center gap-4">
        <h2 className="italica text-5xl text-(--colorYellow)">
          De la idea al navegador.
        </h2>
        <p className="text-6xl text-(--colorWhite) font-bold">
          Desarrollador Web Full Stack{" "}
        </p>
        <p className="text-4xl text-(--colorWhite)">
          Creo aplicaciones web funcionales y&nbsp;escalables
        </p>
      </div>
      <div className="w-full flex justify-between items-center">
        <div className="flex self-start gap-4">
                  <a target="_blank" href={'http://www.Instagram.com'} className="hover-scale rrhh">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a target="_blank" href={'http://www.Linkedin.com'} className="hover-scale rrhh">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                  <a target="_blank" href={'http://www.Facebook.com'} className="hover-scale rrhh">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a target="_blank" href={'http://www.X.com'} className="hover-scale rrhh">
                    <FontAwesomeIcon icon={faXTwitter} />
                  </a>
                </div>
        <div className="flex justify-end">
          <a
            aria-label="Thanks"
            className="h-button2 hover-scale2"
            data-text="Let's Talk"
            href="#"
          >
            <span>C</span>
            <span>O</span>
            <span>N</span>
            <span>T</span>
            <span>A</span>
            <span>C</span>
            <span>T</span>
            <span> </span>
            <span>
              <FontAwesomeIcon icon={faPhone} />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
