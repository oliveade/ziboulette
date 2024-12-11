import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import './output.css';
import Testimonials from "./Testimonials";

function App() {
  return (
    <div>
      {/* Navigation */}
     

      <Routes>
        <Route path="/" element={<Home />} />              
        <Route path="/testimonials" element={<Testimonials />} /> 
      </Routes>
    </div>
  );
}

export default App;
