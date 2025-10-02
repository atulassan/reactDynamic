

import { useState } from "react";
import { DynamicRoutes } from "../../DynamicRoutes";
import SidebarItem from "./Modules/SidebarItem";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-md"
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-gray-100 shadow-lg transform transition-transform duration-200 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        <div className="flex items-center h-16 px-4 font-bold text-lg border-b border-gray-700">
          <span className="text-indigo-400">React Topics</span>
        </div>

        <nav className="px-2 py-4 space-y-1 overflow-y-auto h-[calc(100%-4rem)]">
          {DynamicRoutes.map((item) => (
            <SidebarItem key={item.path} item={item} />
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
