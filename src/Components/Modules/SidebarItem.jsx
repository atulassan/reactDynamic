import { NavLink } from "react-router-dom";


export default function SidebarItem ({ item }) {
  return (
    <div className="ml-2">
      <NavLink
        to={item.path}
        className="block px-3 py-2 rounded-md text-gray-300 hover:bg-gray-800 hover:text-white"
      >
        {item.title}
      </NavLink>

      {/* Render children recursively */}
      {item.children && (
        <div className="ml-4 border-l border-gray-700 pl-2">
          {item.children.map((child) => (
            <SidebarItem key={child.path} item={child} />
          ))}
        </div>
      )}
    </div>
  );
}

