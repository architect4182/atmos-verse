import { useEffect } from "react";
import { useLocation } from "react-router";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Reset standard window scrolling
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    
    // 2. Reset standard document scrolling elements
    if (document.body) document.body.scrollTop = 0;
    if (document.documentElement) document.documentElement.scrollTop = 0;
    
    // 3. Reset the root container just in case it is the scroll container
    const root = document.getElementById("root");
    if (root) root.scrollTop = 0;
    
    // 4. Fallback timeout for layout/Framer Motion paints
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      if (document.body) document.body.scrollTop = 0;
      if (document.documentElement) document.documentElement.scrollTop = 0;
      if (root) root.scrollTop = 0;
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
