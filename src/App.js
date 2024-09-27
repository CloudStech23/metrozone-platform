import React from "react";
import Main from "./components/main/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EPage from "./components/E_page/Page";
import Footer from "./components/main/Footer";
import ScrollToTop from "./components/main/SrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Routes>
        <Route path="/E_page" element={<EPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
