import React, { useState, createContext, useContext } from 'react';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// ============================================
// REACT DESIGN PATTERNS
// ============================================

const DesignPatterns = () => {
  const [activeTab, setActiveTab] = useState('container');

  const patterns = [
    { id: 'container', name: 'Container/Presentational', icon: '📦' },
    { id: 'hoc', name: 'Higher-Order Components', icon: '🎯' },
    { id: 'render-props', name: 'Render Props', icon: '🔄' },
    { id: 'compound', name: 'Compound Components', icon: '🧩' },
    { id: 'provider', name: 'Provider Pattern', icon: '🌐' },
    { id: 'hooks', name: 'Custom Hooks', icon: '🪝' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">React Design Patterns</h1>
          <p className="text-purple-100">Master common patterns for building scalable applications</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto">
            {patterns.map((pattern) => (
              <button
                key={pattern.id}
                onClick={() => setActiveTab(pattern.id)}
                className={`px-5 py-4 font-medium text-sm whitespace-nowrap transition-all border-b-2 ${
                  activeTab === pattern.id
                    ? 'border-purple-600 text-purple-600 bg-purple-50'
                    : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <span className="mr-2">{pattern.icon}</span>
                {pattern.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto p-6">
        {activeTab === 'container' && <ContainerPresentational />}
        {activeTab === 'hoc' && <HigherOrderComponents />}
        {activeTab === 'render-props' && <RenderProps />}
        {activeTab === 'compound' && <CompoundComponents />}
        {activeTab === 'provider' && <ProviderPattern />}
        {activeTab === 'hooks' && <CustomHooks />}
      </div>
    </div>
  );
};

// ============================================
// 1. CONTAINER/PRESENTATIONAL PATTERN
// ============================================
const ContainerPresentational = () => {
  const [users] = useState([
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com' },
    { id: 3, name: 'Carol White', email: 'carol@example.com' }
  ]);
  const [loading] = useState(false);

  const PresentationalUsers = ({ users, loading }) => {
    if (loading) return <div className="text-center py-8">Loading...</div>;
    return (
      <div className="space-y-2">
        {users.map(user => (
          <div key={user.id} className="p-4 bg-white rounded shadow">
            <h3 className="font-bold">{user.name}</h3>
            <p className="text-gray-600 text-sm">{user.email}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          📦 Container/Presentational Pattern
        </h2>
        <p className="text-gray-600 text-lg mb-4">
          Separate business logic (Container) from UI rendering (Presentational)
        </p>
      </div>

      {/* Example */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-2">💡</span>
          <h3 className="text-xl font-bold text-blue-800">Implementation</h3>
        </div>
        <SyntaxHighlighter language="javascript" style={oneDark}>
{`// Presentational Component - Pure UI, no logic
const UserList = ({ users, loading, onUserClick }) => {
  if (loading) {
    return <div className="text-center py-8">Loading users...</div>;
  }

  return (
    <div className="space-y-2">
      {users.map(user => (
        <div 
          key={user.id}
          onClick={() => onUserClick(user)}
          className="p-4 bg-white rounded shadow hover:shadow-md 
                     cursor-pointer transition-shadow"
        >
          <h3 className="font-bold text-lg">{user.name}</h3>
          <p className="text-gray-600">{user.email}</p>
        </div>
      ))}
    </div>
  );
};

// Container Component - Handles logic and state
const UserListContainer = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers()
      .then(data => setUsers(data))
      .finally(() => setLoading(false));
  }, []);

  const handleUserClick = (user) => {
    console.log('User clicked:', user);
  };

  return (
    <UserList 
      users={users}
      loading={loading}
      onUserClick={handleUserClick}
    />
  );
};`}
        </SyntaxHighlighter>
      </div>

      {/* Benefits */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-green-50 p-5 rounded-lg border border-green-200">
          <h4 className="font-bold text-green-800 mb-2">✅ Benefits</h4>
          <ul className="text-sm text-green-700 space-y-1">
            <li>• Clear separation of concerns</li>
            <li>• Presentational components are reusable</li>
            <li>• Easy to test UI independently</li>
            <li>• Better code organization</li>
          </ul>
        </div>
        <div className="bg-amber-50 p-5 rounded-lg border border-amber-200">
          <h4 className="font-bold text-amber-800 mb-2">⚡ Use Cases</h4>
          <ul className="text-sm text-amber-700 space-y-1">
            <li>• Complex components with business logic</li>
            <li>• Reusable UI components</li>
            <li>• Data fetching scenarios</li>
            <li>• Storybook/component libraries</li>
          </ul>
        </div>
      </div>

      {/* Live Demo */}
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg font-bold text-gray-800 mb-4">🎨 Live Demo</h3>
        <PresentationalUsers users={users} loading={loading} />
      </div>
    </div>
  );
};

// ============================================
// 2. HIGHER-ORDER COMPONENTS (HOC)
// ============================================
const HigherOrderComponents = () => {
  const [loading, setLoading] = useState(false);

  const withLoadingHOC = (Component) => {
    return function WithLoading({ isLoading, ...props }) {
      if (isLoading) {
        return (
          <div className="flex items-center justify-center p-8">
            <div className="animate-spin rounded-full h-8 w-8 border-4 border-orange-500 border-t-transparent"></div>
          </div>
        );
      }
      return <Component {...props} />;
    };
  };

  const SimpleCard = ({ title, content }) => (
    <div className="p-4 bg-white rounded shadow">
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  );

  const CardWithLoading = withLoadingHOC(SimpleCard);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-500">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          🎯 Higher-Order Components (HOC)
        </h2>
        <p className="text-gray-600 text-lg mb-4">
          A function that takes a component and returns a new enhanced component
        </p>
      </div>

      {/* Example */}
      <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-6 border border-orange-200">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-2">💡</span>
          <h3 className="text-xl font-bold text-orange-800">Implementation</h3>
        </div>
        <SyntaxHighlighter language="javascript" style={oneDark}>
{`// HOC that adds loading functionality
const withLoading = (Component) => {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (isLoading) {
      return (
        <div className="flex items-center justify-center p-8">
          <div className="animate-spin rounded-full h-12 w-12 
                          border-4 border-blue-500 border-t-transparent">
          </div>
        </div>
      );
    }
    return <Component {...props} />;
  };
};

// Base component
const UserProfile = ({ user }) => (
  <div className="p-6 bg-white rounded-lg shadow">
    <h2 className="text-2xl font-bold">{user.name}</h2>
    <p className="text-gray-600">{user.email}</p>
  </div>
);

// Enhanced component
const UserProfileWithLoading = withLoading(UserProfile);

// Usage
<UserProfileWithLoading 
  isLoading={false}
  user={{ name: 'John', email: 'john@example.com' }}
/>`}
        </SyntaxHighlighter>
      </div>

      {/* Benefits */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-green-50 p-5 rounded-lg border border-green-200">
          <h4 className="font-bold text-green-800 mb-2">✅ Benefits</h4>
          <ul className="text-sm text-green-700 space-y-1">
            <li>• Reuse component logic</li>
            <li>• Compose multiple behaviors</li>
            <li>• Keep components focused</li>
            <li>• Cross-cutting concerns (auth, logging)</li>
          </ul>
        </div>
        <div className="bg-red-50 p-5 rounded-lg border border-red-200">
          <h4 className="font-bold text-red-800 mb-2">⚠️ Drawbacks</h4>
          <ul className="text-sm text-red-700 space-y-1">
            <li>• Wrapper hell with multiple HOCs</li>
            <li>• Props collision issues</li>
            <li>• More complex debugging</li>
            <li>• Custom Hooks often better now</li>
          </ul>
        </div>
      </div>

      {/* Live Demo */}
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg font-bold text-gray-800 mb-4">🎨 Live Demo</h3>
        <button
          onClick={() => setLoading(!loading)}
          className="mb-4 px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700"
        >
          Toggle Loading
        </button>
        <CardWithLoading
          isLoading={loading}
          title="Enhanced Component"
          content="This component is wrapped with a loading HOC!"
        />
      </div>
    </div>
  );
};

// ============================================
// 3. RENDER PROPS PATTERN
// ============================================
const RenderProps = () => {
  const MousePosition = ({ render }) => {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    return (
      <div
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        }}
        className="h-40 bg-gradient-to-br from-green-100 to-emerald-100 rounded border-2 border-green-300 relative"
      >
        {render(pos)}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          🔄 Render Props Pattern
        </h2>
        <p className="text-gray-600 text-lg mb-4">
          Share code between components using a prop whose value is a function
        </p>
      </div>

      {/* Example */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-2">💡</span>
          <h3 className="text-xl font-bold text-green-800">Implementation</h3>
        </div>
        <SyntaxHighlighter language="javascript" style={oneDark}>
{`// Component with render prop
const MouseTracker = ({ render }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY
    });
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="h-64 border-2 border-dashed border-gray-300"
    >
      {render(position)}
    </div>
  );
};

// Usage - complete flexibility!
<MouseTracker 
  render={({ x, y }) => (
    <div>
      <h2>Mouse position:</h2>
      <p>X: {x}, Y: {y}</p>
    </div>
  )}
/>`}
        </SyntaxHighlighter>
      </div>

      {/* Benefits */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-green-50 p-5 rounded-lg border border-green-200">
          <h4 className="font-bold text-green-800 mb-2">✅ Benefits</h4>
          <ul className="text-sm text-green-700 space-y-1">
            <li>• Maximum flexibility in rendering</li>
            <li>• Share stateful logic easily</li>
            <li>• No naming collisions</li>
            <li>• Dynamic composition</li>
          </ul>
        </div>
        <div className="bg-amber-50 p-5 rounded-lg border border-amber-200">
          <h4 className="font-bold text-amber-800 mb-2">💡 Tips</h4>
          <ul className="text-sm text-amber-700 space-y-1">
            <li>• Can also use children as function</li>
            <li>• Great for cross-cutting concerns</li>
            <li>• Custom hooks often simpler</li>
            <li>• Watch for callback refs issues</li>
          </ul>
        </div>
      </div>

      {/* Live Demo */}
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg font-bold text-gray-800 mb-4">🎨 Live Demo - Move Your Mouse!</h3>
        <MousePosition
          render={({ x, y }) => (
            <div className="text-center pt-12">
              <p className="text-gray-700 font-semibold">Mouse Position</p>
              <p className="text-green-600 font-bold text-xl">X: {Math.round(x)}, Y: {Math.round(y)}</p>
            </div>
          )}
        />
      </div>
    </div>
  );
};

// ============================================
// 4. COMPOUND COMPONENTS PATTERN
// ============================================
const CompoundComponents = () => {
  const AccordionContext = createContext();

  const Accordion = ({ children }) => {
    const [openIndex, setOpenIndex] = useState(null);
    return (
      <AccordionContext.Provider value={{ openIndex, setOpenIndex }}>
        <div className="space-y-2">{children}</div>
      </AccordionContext.Provider>
    );
  };

  const AccordionItem = ({ index, title, children }) => {
    const { openIndex, setOpenIndex } = useContext(AccordionContext);
    const isOpen = openIndex === index;

    return (
      <div className="border border-purple-200 rounded overflow-hidden">
        <button
          onClick={() => setOpenIndex(isOpen ? null : index)}
          className="w-full px-4 py-3 bg-purple-50 hover:bg-purple-100 text-left font-medium flex justify-between items-center"
        >
          {title}
          <span className="text-xl">{isOpen ? '−' : '+'}</span>
        </button>
        {isOpen && <div className="p-4 bg-white">{children}</div>}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          🧩 Compound Components Pattern
        </h2>
        <p className="text-gray-600 text-lg mb-4">
          Components that work together, sharing implicit state
        </p>
      </div>

      {/* Example */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-2">💡</span>
          <h3 className="text-xl font-bold text-purple-800">Implementation</h3>
        </div>
        <SyntaxHighlighter language="javascript" style={oneDark}>
{`// Context for sharing state
const TabsContext = createContext();

const Tabs = ({ children, defaultValue }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="w-full">{children}</div>
    </TabsContext.Provider>
  );
};

const Tab = ({ value, children }) => {
  const { activeTab, setActiveTab } = useContext(TabsContext);
  const isActive = activeTab === value;

  return (
    <button
      onClick={() => setActiveTab(value)}
      className={\`px-4 py-2 \${isActive ? 'border-b-2 border-purple-600' : ''}\`}
    >
      {children}
    </button>
  );
};

// Usage - Beautiful API!
<Tabs defaultValue="profile">
  <Tab value="profile">Profile</Tab>
  <Tab value="settings">Settings</Tab>
</Tabs>`}
        </SyntaxHighlighter>
      </div>

      {/* Benefits */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-green-50 p-5 rounded-lg border border-green-200">
          <h4 className="font-bold text-green-800 mb-2">✅ Benefits</h4>
          <ul className="text-sm text-green-700 space-y-1">
            <li>• Intuitive, declarative API</li>
            <li>• Flexible component composition</li>
            <li>• Implicit state sharing</li>
            <li>• Clear parent-child relationship</li>
          </ul>
        </div>
        <div className="bg-amber-50 p-5 rounded-lg border border-amber-200">
          <h4 className="font-bold text-amber-800 mb-2">🎯 Examples</h4>
          <ul className="text-sm text-amber-700 space-y-1">
            <li>• Select/Option components</li>
            <li>• Accordion components</li>
            <li>• Tab systems</li>
            <li>• Menu/MenuItem components</li>
          </ul>
        </div>
      </div>

      {/* Live Demo */}
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg font-bold text-gray-800 mb-4">🎨 Live Demo - Accordion</h3>
        <Accordion>
          <AccordionItem index={0} title="What is React?">
            React is a JavaScript library for building user interfaces.
          </AccordionItem>
          <AccordionItem index={1} title="Why use Compound Components?">
            They provide a flexible and intuitive API for complex components.
          </AccordionItem>
          <AccordionItem index={2} title="When to use this pattern?">
            Use it when you have components that need to work together closely.
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

// ============================================
// 5. PROVIDER PATTERN
// ============================================
const ProviderPattern = () => {
  const DemoThemeContext = createContext();

  const DemoThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');
    return (
      <DemoThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </DemoThemeContext.Provider>
    );
  };

  const ThemedCard = () => {
    const { theme, toggleTheme } = useContext(DemoThemeContext);
    return (
      <div className={`p-6 rounded-lg border transition-colors ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
        <h3 className="font-bold text-lg mb-2">Current Theme: {theme}</h3>
        <p className="mb-4">This component accesses theme from context!</p>
        <button
          onClick={toggleTheme}
          className={`px-4 py-2 rounded font-medium text-white ${theme === 'dark' ? 'bg-teal-600 hover:bg-teal-700' : 'bg-teal-500 hover:bg-teal-600'}`}
        >
          Toggle Theme
        </button>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-teal-500">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          🌐 Provider Pattern
        </h2>
        <p className="text-gray-600 text-lg mb-4">
          Make data available to multiple components using Context API
        </p>
      </div>

      {/* Example */}
      <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg p-6 border border-teal-200">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-2">💡</span>
          <h3 className="text-xl font-bold text-teal-800">Implementation</h3>
        </div>
        <SyntaxHighlighter language="javascript" style={oneDark}>
{`// Create context and provider
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Components can access theme anywhere
const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <header>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </header>
  );
};

// Usage
<ThemeProvider>
  <Header />
</ThemeProvider>`}
        </SyntaxHighlighter>
      </div>

      {/* Benefits */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-green-50 p-5 rounded-lg border border-green-200">
          <h4 className="font-bold text-green-800 mb-2">✅ Benefits</h4>
          <ul className="text-sm text-green-700 space-y-1">
            <li>• Avoid prop drilling</li>
            <li>• Global state management</li>
            <li>• Clean component APIs</li>
            <li>• Easy to test with different providers</li>
          </ul>
        </div>
        <div className="bg-amber-50 p-5 rounded-lg border border-amber-200">
          <h4 className="font-bold text-amber-800 mb-2">⚡ Use Cases</h4>
          <ul className="text-sm text-amber-700 space-y-1">
            <li>• Theme management</li>
            <li>• User authentication</li>
            <li>• Language/i18n</li>
            <li>• App configuration</li>
          </ul>
        </div>
      </div>

      {/* Live Demo */}
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg font-bold text-gray-800 mb-4">🎨 Live Demo</h3>
        <DemoThemeProvider>
          <ThemedCard />
        </DemoThemeProvider>
      </div>
    </div>
  );
};

// ============================================
// 6. CUSTOM HOOKS PATTERN
// ============================================
const CustomHooks = () => {
  const useCounter = (initialValue = 0) => {
    const [count, setCount] = useState(initialValue);
    const increment = () => setCount(c => c + 1);
    const decrement = () => setCount(c => c - 1);
    const reset = () => setCount(initialValue);
    return { count, increment, decrement, reset };
  };

  const CounterDemo = () => {
    const { count, increment, decrement, reset } = useCounter(0);

    return (
      <div className="bg-gradient-to-br from-pink-100 to-purple-100 p-6 rounded-lg">
        <h4 className="font-bold text-lg mb-4 text-gray-800">Counter: {count}</h4>
        <div className="flex gap-2">
          <button
            onClick={decrement}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            -
          </button>
          <button
            onClick={reset}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Reset
          </button>
          <button
            onClick={increment}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            +
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-pink-500">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          🪝 Custom Hooks Pattern
        </h2>
        <p className="text-gray-600 text-lg mb-4">
          Extract and reuse stateful logic across components
        </p>
      </div>

      {/* Example 1 */}
      <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg p-6 border border-pink-200">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-2">💡</span>
          <h3 className="text-xl font-bold text-pink-800">Example: useCounter Hook</h3>
        </div>
        <SyntaxHighlighter language="javascript" style={oneDark}>
{`// Custom hook for counter logic
const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
};

// Usage in components
const Counter = () => {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};`}
        </SyntaxHighlighter>
      </div>

      {/* Example 2 */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-6 border border-indigo-200">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-2">💡</span>
          <h3 className="text-xl font-bold text-indigo-800">Example: useFetch Hook</h3>
        </div>
        <SyntaxHighlighter language="javascript" style={oneDark}>
{`// Custom hook for data fetching
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

// Usage - super clean!
const UserList = () => {
  const { data: users, loading, error } = useFetch('/api/users');

  if (loading) return <Spinner />;
  if (error) return <Error message={error} />;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};`}
        </SyntaxHighlighter>
      </div>

      {/* Benefits */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-green-50 p-5 rounded-lg border border-green-200">
          <h4 className="font-bold text-green-800 mb-2">✅ Benefits</h4>
          <ul className="text-sm text-green-700 space-y-1">
            <li>• Reusable stateful logic</li>
            <li>• Clean and composable</li>
            <li>• Easy to test</li>
            <li>• Better than HOCs for most cases</li>
            <li>• No wrapper hell</li>
          </ul>
        </div>
        <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
          <h4 className="font-bold text-blue-800 mb-2">💡 Best Practices</h4>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• Start with "use" prefix</li>
            <li>• Keep hooks focused and simple</li>
            <li>• Return arrays or objects consistently</li>
            <li>• Document parameters and return values</li>
            <li>• Handle cleanup in useEffect</li>
          </ul>
        </div>
      </div>

      {/* Live Demo */}
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg font-bold text-gray-800 mb-4">🎨 Live Demo - useCounter Hook</h3>
        <CounterDemo />
      </div>
    </div>
  );
};

export default DesignPatterns;