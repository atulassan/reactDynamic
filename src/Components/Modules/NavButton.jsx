export const NavButton = ({ title, path, currentPath, onClick, icon }) => {
  const isActive = currentPath === path;
  
  return (
    <button
      onClick={() => onClick(path)}
      className={`block cursor-pointer text-sm w-full text-left py-2 px-4 rounded transition-colors ${
        isActive 
          ? 'bg-blue-500 text-white font-medium' 
          : 'hover:bg-blue-100 text-gray-700'
      }`}
    >
      {/*icon && <span className="mr-2">{icon}</span>*/}
      {title}
    </button>
  );
};