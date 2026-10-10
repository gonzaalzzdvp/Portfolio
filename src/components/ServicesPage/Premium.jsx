import { faCircleArrowRight, faCircleDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Basic() {
  const list1 = [
    "Tiendas de productos físicos",
    "Emprendimientos",
    "Marcas de productos",
    "Negocios que desean comenzar a vender online",
    "Tiendas que necesitan un catálogo digital",
  ];

  const list2 = [
    "Página de inicio",
    "Catálogo y categorias de productos",
    "Página individual de cada producto",
    "Carrito de compras",
    "Gestión de cantidades y productos",
    "Proceso de checkout",
    "Integración de métodos de pago",
    "Gestión de pedidos",
    "Registro e inicio de sesión de usuarios",
    "Buscador de productos y filtros",
    "SEO básico",
    "Optimización de rendimiento",
    "Admin Panel, según alcance del proyecto",
    "Publicación y configuración inicial",
  ];

  return (
    <div className="min-h-[calc(100vh-64px)] mt-16 p-8 flex justify-center items-center">
      <div className="w-full h-full flex flex-col justify-around gap-6 text-white ">
        <div className="flex flex-col gap-5">
          <h2 className="text-6xl font-extrabold">
            Plan Premium{" "}
            <span className="text-2xl text-(--emerald)">Tienda Online</span>
          </h2>
          <p>
            Una tienda online permite llevar tu negocio al mundo digital y
            ofrecer a tus clientes una experiencia de compra moderna desde
            cualquier dispositivo.
          </p>
        </div>
        <div className="flex flex-col justify-center gap-6">
          <div className="bg-(--cornsilk) w-80 p-4 flex flex-col gap-5 rounded-2xl">
            <h3 className="text-3xl text-(--emeraldDepths) font-semibold">Ideal para:</h3>
            <ul className="flex flex-col gap-2 justify-center">
              {list1.map((element) => (
                <li key={element} className="flex items-center gap-2 text-(--charcoalBlue)">
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
                <li key={element} className="h-full flex items-center gap-2">
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
      <div className="w-full h-full flex flex-col">
        <div className="w-full h-full flex justify-center items-center">
          <img src="/ServicesPage/Aang.png" className="h-100" />
        </div>
        <div className="w-full p-5 flex justify-end items-end gap-2 font-extrabold text-white">
          <p className="text-3xl">Desde:</p>
          <p className="text-(--emerald) text-5xl">
            $<span className="text-white">480</span>
          </p>
        </div>
      </div>
    </div>
  );
}
