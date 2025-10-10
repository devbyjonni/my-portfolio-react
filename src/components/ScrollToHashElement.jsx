import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHashElement() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    // scroll to top when navigating normally
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // wait for React to render DOM
    const id = hash.replace("#", "");
    const el = document.getElementById(id);

    if (el) {
      // delay one animation frame so layout settles
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      return;
    }

    // fallback: retry if element not yet mounted
    let tries = 0;
    const timer = setInterval(() => {
      const node = document.getElementById(id);
      if (node) {
        node.scrollIntoView({ behavior: "smooth", block: "start" });
        clearInterval(timer);
      } else if (++tries > 20) clearInterval(timer);
    }, 100);

    return () => clearInterval(timer);
  }, [hash, pathname]);

  return null;
}
