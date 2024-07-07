import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import CollegeGrid from "./pages/CollegeGrid";
import General from "./pages/General";
import AiAssit from "./pages/AiAssit";
import About from "./pages/About";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/collegegrid" element={<CollegeGrid />} />
        <Route path="/general" element={<General />} />
        <Route path="/ai-assist" element={<AiAssit />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
