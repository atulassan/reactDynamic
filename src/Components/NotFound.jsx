export const NotFound = ({ onNavigate, message = "The page you're looking for doesn't exist." }) => {
  return (
    <div className="p-6 animate-fadeIn">
      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        <h1 className="text-3xl font-bold text-red-700 mb-4">404 - Page Not Found</h1>
        <p className="text-gray-700 mb-4">{message}</p>
        <button
          onClick={() => onNavigate('/')}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          Go back home
        </button>
      </div>
    </div>
  );
};