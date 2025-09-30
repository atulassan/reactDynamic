import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DynamicRoutes } from "../../DynamicRoutes";
import { generateRoutes } from "./generateRoutes";
import Home from '../pages/Home'; // Assuming you have a Home component     

function AppRoutes() {
  return (
    <Router>
      <Routes>
        {generateRoutes(DynamicRoutes)}
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<div>404 Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
