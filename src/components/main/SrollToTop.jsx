import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Add a small delay to ensure mobile layout is rendered before scrolling
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100); // Delay might help in mobile responsiveness
  }, [pathname]);

  return null;
};

export default ScrollToTop;
