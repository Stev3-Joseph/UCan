import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import CollegeGrid from "./pages/CollegeGrid";
import General from "./pages/General";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/collegegrid" element={<CollegeGrid />} />
        <Route path="/general" element={<General />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
