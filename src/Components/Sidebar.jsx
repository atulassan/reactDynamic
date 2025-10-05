import { NavButton } from "./Modules/NavButton";
import { NavSection } from "./Modules/NavSection";

export const Sidebar = ({ routes, currentPath, onNavigate, title = "Navigation", homeIcon = "🏠" }) => {
  return (
    <div className="w-64 bg-gray-50 border-r border-gray-200 h-screen overflow-y-auto">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4 text-gray-800">{title}</h2>
        <NavButton
          title="Home"
          path="/"
          currentPath={currentPath}
          onClick={onNavigate}
          icon={homeIcon}
        />
        <hr className="my-4" />
        <NavSection
          routes={routes}
          currentPath={currentPath}
          onNavigate={onNavigate}
        />
      </div>
    </div>
  );
};