// useScrollRestoration.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const scrollPositions = {};

export default function useScrollRestoration() {
  const { pathname } = useLocation();

  useEffect(() => {
    // restore saved position (if exists) when route changes
    if (scrollPositions[pathname]) {
      window.scrollTo(0, scrollPositions[pathname]);
    } else {
      window.scrollTo(0, 0);
    }

    const handleScroll = () => {
      scrollPositions[pathname] = window.scrollY; // save scroll position
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);
}
