import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    let timeoutId;

    const scrollToTarget = () => {
      if (!hash) {
        window.scrollTo({
          top: 0,
          behavior: "instant",
        });

        return;
      }

      const targetId = decodeURIComponent(hash.slice(1));
      const target = document.getElementById(targetId);

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    const frameId = requestAnimationFrame(() => {
      timeoutId = window.setTimeout(scrollToTarget, 50);
    });

    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(timeoutId);
    };
  }, [pathname, hash]);

  return null;
}
