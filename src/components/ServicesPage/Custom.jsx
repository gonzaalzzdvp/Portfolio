import { faCircleDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Custom() {
  const list1 = [
    "Emprendedores",
    "Profesionales independientes",
    "Lanzamiento de productos",
    "Campañas publicitarias",
    "Servicios profesionales",
    "Negocios pequeños",
    "Portafolios personales",
  ];

  return (
    <div className="p-8 flex flex-col justify-center items-center gap-8 text-white">
      <div className="flex flex-col gap-5 text-center">
        <h2 className="text-6xl font-extrabold">Plan Personalizado</h2>

        <p className="flex flex-col gap-2">
          <span>
            No todos los proyectos encajan dentro de una Landing Page, Web
            Corporativa o Tienda Online.
          </span>
          <span>
            También se pueden desarrollar soluciones personalizadas según las
            necesidades de cada negocio.
          </span>
        </p>
      </div>

      <div className="w-full flex flex-col gap-8">
        <div className="w-full flex flex-col items-center gap-5 text-center">
          <h3 className="text-3xl font-semibold">Pueden ser:</h3>

          <ul className="w-1/2 flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
            {list1.map((element) => (
              <li
                key={element}
                className="flex items-center justify-center gap-2 text-center"
              >
                <FontAwesomeIcon
                  icon={faCircleDot}
                  className="shrink-0 text-xl text-(--emerald)"
                />
                <span>{element}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
