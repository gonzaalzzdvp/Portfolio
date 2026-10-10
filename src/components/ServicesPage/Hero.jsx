export default function Hero() {
  return (
    <div className="relative bg-(--emeraldDepths) h-screen overflow-hidden rounded-b-4xl border-2 border-gray-600">
      {/* Texto detrás */}
      <h1
        className="
            absolute
            left-1/2 top-1/2
            -translate-x-1/2 -translate-y-1/2
            z-10
            whitespace-nowrap
            text-[15vw]
            font-black
            leading-none
            text-(--cornsilk)
        "
      >
        Web Services
      </h1>

      {/* Persona */}
      <img
        src="/ServicesPage/Aang.png"
        className="
        absolute
        bottom-0
        left-1/2
        z-20
        h-[90%]
        -translate-x-1/2
        transition-all
        hover:scale-110
        "
      />

      {/* Texto por delante */}
      <h1
        className="
            absolute
            left-1/2 top-1/2
            -translate-x-1/2 -translate-y-1/2
            z-30
            whitespace-nowrap
            text-[15vw]
            font-black
            leading-none
            text-transparent
            [-webkit-text-stroke:2px_var(--cornsilk)]
        "
      >
        Web Services
      </h1>
    </div>
  );
}
