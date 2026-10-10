import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <div className="bg-(--emeraldDepths) w-full h-50 flex flex-col justify-center items-center text-white">
      <div className="h-full flex justify-center items-center">
        <a href="https://www.linkedin.com/in/hectorlgonzalez91/" target="_blank">
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-6xl text-blue-500 transition-all hover:scale-115"
          />
        </a>
        <a href="https://github.com/gonzaalzzdvp" target="_blank">
          <FontAwesomeIcon
            icon={faGithub}
            className="text-6xl text-white transition-all hover:scale-115"
          />
        </a>
      </div>
      <div className="w-full bg-white">
        <p className="text-sm text-center text-(--emeraldDepths) font-bold">
          © 2025 GonzaalzzDVP. All rights reserved
        </p>
      </div>
    </div>
  );
}
