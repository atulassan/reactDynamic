import { useState, useMemo } from "react";
import { NavSection } from "./Modules/NavSection";
import { NavButton } from "./Modules/NavButton";
import { NavLink } from "react-router-dom";
import { filterRoutes } from "../utils/LazyLoader";


export const Sidebar = ({ routes, currentPath, onNavigate, title = "Navigation", homeIcon = "🏠" }) => {

  const [searchTerm, setSearchTerm] = useState('');

  //const filterRoutesNew = filterRoutes([routes], searchTerm);

  const filteredRoutes = useMemo(() => {
    return filterRoutes(routes, searchTerm);
  }, [routes, searchTerm]);

  console.log(filteredRoutes)

  return (
    <div className="w-64 bg-gray-50 border-r border-gray-200 h-screen overflow-y-auto">
      <div className="p-4">
        {/*<h2 className="text-xl font-bold mb-2 text-gray-800">{title}</h2>*/}

        <div className="flex items-center justify-center space-x-2 p-3">
          <NavButton
            title="Home"
            path="/"
            currentPath={currentPath}
            onClick={onNavigate}
            icon={homeIcon}
          />
          <NavLink
            to="/javascript"
            className={({ isActive }) =>
              isActive ?
                "block cursor-pointer text-sm w-full text-left py-2 px-4 rounded transition-colors bg-blue-500 text-white font-medium" :
                "block cursor-pointer text-sm w-full text-left py-2 px-4 rounded transition-colors hover:bg-blue-300 bg-blue-100 text-gray-700"}
          >Js</NavLink>
          <NavLink
            to="/react"
            className={({ isActive }) =>
              isActive ?
                "block cursor-pointer text-sm w-full text-left py-2 px-4 rounded transition-colors bg-blue-500 text-white font-medium" :
                "block cursor-pointer text-sm w-full text-left py-2 px-4 rounded transition-colors hover:bg-blue-300 bg-blue-100 text-gray-700"}
          >React</NavLink>
        </div>
        
       <div className="mb-2">
          <input
            type="text"
            placeholder="Search routes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <hr className="my-4" />
        <NavSection
          routes={filteredRoutes}
          currentPath={currentPath}
          onNavigate={onNavigate}
        />
      </div>
    </div>
  );
};