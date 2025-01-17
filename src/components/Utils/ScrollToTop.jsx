// import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log("Pathname changed:", pathname); // Debugging
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional for smooth scrolling
    });
  }, [pathname]);
  return null;
}

export default ScrollToTop;
