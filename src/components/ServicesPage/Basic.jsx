import { faCircleArrowRight, faCircleDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Basic() {
  const list1 = [
    "Emprendedores",
    "Profesionales independientes",
    "Lanzamiento de productos",
    "Campañas publicitarias",
    "Servicios profesionales",
    "Negocios pequeños",
    "Portafolios personales",
  ];

  const list2 = [
    "Sección principal (Hero)",
    "Presentación del negocio o producto",
    "Sección de servicios o beneficios",
    "Galería de imágenes",
    "Llamadas a la acción (CTA)",
    "Formulario de contacto",
    "Botón de WhatsApp",
    "Optimización SEO básica",
    "Optimización de velocidad y rendimiento",
    "Publicación del sitio",
  ];

  return (
    <div className="min-h-[calc(100vh-64px)] mt-16 p-8 flex justify-center items-center">
      <div className="w-full h-full flex flex-col">
        <div className="w-full h-full flex justify-center items-center">
          <img src="/ServicesPage/Aang.png" className="h-100" />
        </div>
        <div className="w-full p-5 flex justify-start items-end gap-2 font-extrabold text-white">
          <p className="text-3xl">
            Desde:
          </p>
          <p className="text-(--emerald) text-5xl">$<span className="text-white">150</span></p>
        </div>
      </div>
      <div className="w-full h-full flex flex-col justify-around text-white gap-6">
        <div className="flex flex-col gap-5">
          <h2 className="text-6xl font-extrabold">
            Plan Básico{" "}
            <span className="text-2xl text-(--emerald)">Landing Page</span>
          </h2>
          <p>
            Una landing page es una solución ideal para emprendedores,
            profesionales y negocios que necesitan una presencia web moderna,
            clara y enfocada en conseguir clientes.
          </p>
        </div>
        <div className="flex flex-col justify-center gap-6">
          <div className="w-80 bg-(--cornsilk) p-4 flex flex-col gap-5 rounded-2xl">
            <h3 className="text-3xl text-(--emeraldDepths) font-semibold">Ideal para:</h3>
            <ul className="flex flex-col gap-2 justify-center">
              {list1.map((element) => (
                <li key={element} className="h-full flex items-center gap-2 text-(--charcoalBlue)">
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
    </div>
  );
}
