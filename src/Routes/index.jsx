
import {  Routes, Route } from "react-router-dom";
//import { DynamicRoutes } from "../../DynamicRoutes";
//import { generateRoutes } from "./generateRoutes";
import Home from '../pages/Home'; // Assuming you have a Home component     
import ReactMain from "../pages/React";
import JavascriptMain from "../pages/javascript";

function AppRoutes() {
  return (
    
      <Routes>
        { /*generateRoutes(DynamicRoutes)*/  }
        <Route exact path="/" element={<Home />} />
        <Route exact path="/react" element={<ReactMain />} />
        <Route exact path="/javascript" element={<JavascriptMain />} />
        <Route path="*" element={<div>404 Page Not Found</div>} />
      </Routes>
  );
}

export default AppRoutes;
