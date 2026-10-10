import { faCircleArrowRight, faCircleDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Business() {
  const list1 = [
    "Empresas",
    "Agencias",
    "Consultorios",
    "Restaurantes",
    "Profesionales",
    "Empresas de servicios",
    "Organizaciones y negocios establecidos",
  ];

  const list2 = [
    "Página de inicio",
    "Página 'Nosotros'",
    "Página de servicios",
    "Portafolio o proyectos",
    "Página de contacto",
    "Formulario de contacto",
    "Galerías de imágenes",
    "FAQ / Preguntas frecuentes",
    "Navegación optimizada",
    "SEO básico",
    "Optimización de velocidad",
    "Configuración para motores de búsqueda",
    "Publicación del sitio",
  ];

  return (
    <div className="bg-(--cornsilk) min-h-[calc(100vh-88px)] m-4 p-8 flex justify-center items-center rounded-2xl">
      <div className="w-full flex flex-col gap-6">
        <div className="flex flex-col gap-5">
          <h2 className="text-6xl font-extrabold flex flex-col">
            Plan Profesional{" "}
            <span className="text-2xl text-(--emerald)">Web Corporativa</span>
          </h2>
          <p>
            Una web corporativa es la opción adecuada para empresas que
            necesitan presentar sus servicios, generar confianza y ofrecer a sus
            clientes toda la información necesaria desde un sitio profesional.
          </p>
        </div>
        <div className="flex flex-col justify-center gap-6">
          <div className="bg-(--emeraldDepths) w-80 p-4 flex flex-col gap-5 rounded-2xl">
            <h3 className="text-3xl text-(--cornsilk) font-semibold">Ideal para:</h3>
            <ul className="flex flex-col gap-2 justify-center">
              {list1.map((element) => (
                <li key={element} className="h-full flex items-center gap-2 text-white">
                  <FontAwesomeIcon
                    icon={faCircleArrowRight}
                    className="text-2xl text-(--emerald)"
                  />
                  {element}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="text-3xl font-semibold">Puede incluir:</h3>
            <ul className="flex flex-wrap gap-2 justify-center">
              {list2.map((element) => (
                <li key={element} className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faCircleDot}
                    className="text-xl text-(--emerald)"
                  />
                  {element}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="w-full h-full flex justify-center items-center">
          <img src="/ServicesPage/Aang.png" className="h-100" />
        </div>
        <div className="w-full p-5 flex justify-end items-end gap-2 font-extrabold text-(--emeraldDepths)">
          <p className="text-3xl">Desde:</p>
          <p className="text-(--emerald) text-5xl">
            $<span className="text-(--emeraldDepths)">280</span>
          </p>
        </div>
      </div>
    </div>
  );
}
