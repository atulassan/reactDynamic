import { NavButton } from "./NavButton";

export const NavSection = ({ routes, currentPath, onNavigate, level = 0 }) => {
  return routes.map((route) => (
    <div key={route.path} className={`${level > 0 ? 'ml-4' : ''}`}>
      <NavButton
        title={route.title}
        path={route.path}
        currentPath={currentPath}
        onClick={onNavigate}
      />
      {route.children && (
        <div className="ml-2 border-l-2 border-gray-200">
          <NavSection
            routes={route.children}
            currentPath={currentPath}
            onNavigate={onNavigate}
            level={level + 1}
          />
        </div>
      )}
    </div>
  ));
};