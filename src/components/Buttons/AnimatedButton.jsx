export default function AnimatedButton({
  text = "Button",
  icon,
  bgColor = "var(--emerald)",
  height = "h-16",
  href,
  type = "button",
}) {
  const isExternalLink =
    href?.startsWith("http://") || href?.startsWith("https://");

  const className = `
    group
    relative
    w-54
    ${height}
    p-0
    flex
    items-center
    overflow-hidden
    rounded-3xl
    border-none
    cursor-pointer

    shadow-[1px_1px_3px_rgba(0,0,0,0.15)]

    transition-all
    duration-300
    hover:brightness-110
    hover:scale-110

    focus:outline-none
  `;

  const content = (
    <>
      {/* TEXT */}

      <span
        className="
          w-full
          pl-5
          text-start
          text-base
          font-bold
          text-white
          uppercase

          transition-all
          duration-300
          ease-in-out

          group-hover:text-transparent
          group-hover:-translate-x-5
        "
      >
        {text}
      </span>

      {/* ICON */}

      <span
        className="
          absolute
          right-0
          top-0
          text-2xl

          w-12
          h-full

          flex
          items-center
          justify-center

          border-l
          border-black/15

          transition-all
          duration-300
          ease-in-out

          group-hover:w-full
          group-hover:border-l-0

          [&_svg]:w-5
          [&_svg]:h-5

          group-active:[&_svg]:scale-80
        "
      >
        {icon}
      </span>
    </>
  );

  // LINK
  if (href) {
    return (
      <a
        href={href}
        target={isExternalLink ? "_blank" : undefined}
        rel={isExternalLink ? "noopener noreferrer" : undefined}
        style={{
          backgroundColor: bgColor,
        }}
        className={className}
      >
        {content}
      </a>
    );
  }

  // BUTTON
  return (
    <button
      type={type}
      style={{
        backgroundColor: bgColor,
      }}
      className={className}
    >
      {content}
    </button>
  );
}
