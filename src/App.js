//  npm i react-icons --save
// npm i react-router-dom@v6
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Cont from "./routes/Cont";
import Qns from "./routes/Qns";
import Subs from "./routes/Subs";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lessons" element={<Subs />} />
        <Route path="/faq" element={<Qns />} />
        <Route path="/contact" element={<Cont />} />
      </Routes>
    </>
  );
}

export default App;
