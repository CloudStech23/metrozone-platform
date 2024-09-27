import React from "react";
import Main from "./components/main/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EPage from "./components/E_page/Page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Routes>
        <Route path="/E_page" element={<EPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
