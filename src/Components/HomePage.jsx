import { FeatureCard } from "./Modules/FeatureCard";

export const HomePage = ({ onNavigate, features, sections, title = "Welcome to React Learning", subtitle = "Select a topic from the sidebar to get started" }) => {
  return (
    <div className="p-6 animate-fadeIn">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">{title}</h1>
      <p className="text-gray-600 mb-6 text-lg">{subtitle}</p>
      
      {features && features.length > 0 && (
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200 mb-6">
          <h2 className="font-semibold text-xl mb-4 text-gray-800">🚀 Features of This App:</h2>
          <div className="grid gap-3">
            {features.map((feature, idx) => (
              <FeatureCard key={idx} {...feature} />
            ))}
          </div>
        </div>
      )}

      {sections && sections.length > 0 && (
        <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
          <h2 className="font-semibold text-lg mb-3 text-amber-900">📚 JavaScript Topics:</h2>
          <div className="space-y-3">
            {sections.map((section, idx) => (
              <div key={idx} className="flex items-start bg-white p-3 rounded-lg shadow-sm">
                <span className="text-amber-600 mr-3 text-2xl flex-shrink-0">{section.icon}</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">{section.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{section.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};