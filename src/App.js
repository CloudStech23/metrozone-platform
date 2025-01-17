import React, { useEffect } from "react";
import Main from "./components/main/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EPage from "./components/E_page/Page";
import Footer from "./components/main/Footer";
import ScrollToTop from "./components/Utils/ScrollToTop";

function App() {

  
  useEffect(() => {
    // Disable right-click context menu
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    // Disable keyboard shortcuts
    // const handleKeyDown = (e) => {
    //   if (
    //     e.key === "F12" ||
    //     (e.ctrlKey && e.shiftKey && e.key === "I") ||
    //     (e.ctrlKey && e.shiftKey && e.key === "J") ||
    //     (e.ctrlKey && e.key === "U")
    //   ) {
    //     e.preventDefault();
    //   }
    // };

    // Attach event listeners
    // document.addEventListener("contextmenu", handleContextMenu);
    // document.addEventListener("keydown", handleKeyDown);

    // Cleanup event listeners on component unmount
    // return () => {
    //   document.removeEventListener("contextmenu", handleContextMenu);
    //   document.removeEventListener("keydown", handleKeyDown);
    // };
  }, []);
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Events-details/:id" element={<EPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
