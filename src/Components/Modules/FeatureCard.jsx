export const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-4 rounded shadow-sm">
    <h3 className="font-medium text-gray-800 mb-1">
      {icon && <span className="mr-2">{icon}</span>}
      {title}
    </h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);