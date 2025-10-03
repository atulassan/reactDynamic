import React, { useState } from 'react';

// ============================================
// SOLID PRINCIPLES IN REACT
// ============================================

const Solidnew = () => {
  const [activeTab, setActiveTab] = useState('srp');

  const principles = [
    { id: 'srp', name: 'Single Responsibility', icon: '1️⃣' },
    { id: 'ocp', name: 'Open/Closed', icon: '2️⃣' },
    { id: 'lsp', name: 'Liskov Substitution', icon: '3️⃣' },
    { id: 'isp', name: 'Interface Segregation', icon: '4️⃣' },
    { id: 'dip', name: 'Dependency Inversion', icon: '5️⃣' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">SOLID Principles in React</h1>
          <p className="text-blue-100">Master clean code architecture with practical examples</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto">
            {principles.map((principle) => (
              <button
                key={principle.id}
                onClick={() => setActiveTab(principle.id)}
                className={`px-6 py-4 font-medium text-sm whitespace-nowrap transition-all border-b-2 ${
                  activeTab === principle.id
                    ? 'border-blue-600 text-blue-600 bg-blue-50'
                    : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <span className="mr-2">{principle.icon}</span>
                {principle.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto p-6">
        {activeTab === 'srp' && <SingleResponsibility />}
        {activeTab === 'ocp' && <OpenClosed />}
        {activeTab === 'lsp' && <LiskovSubstitution />}
        {activeTab === 'isp' && <InterfaceSegregation />}
        {activeTab === 'dip' && <DependencyInversion />}
      </div>
    </div>
  );
};

// ============================================
// 1. SINGLE RESPONSIBILITY PRINCIPLE
// ============================================
const SingleResponsibility = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-500">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          Single Responsibility Principle (SRP)
        </h2>
        <p className="text-gray-600 text-lg mb-4">
          A component should have one, and only one, reason to change.
        </p>
      </div>

      {/* Bad Example */}
      <div className="bg-red-50 rounded-lg p-6 border border-red-200">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-2">❌</span>
          <h3 className="text-xl font-bold text-red-800">Bad Example - Multiple Responsibilities</h3>
        </div>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`// ❌ Bad: UserProfile does too many things
const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetching data
  useEffect(() => {
    setLoading(true);
    fetch(\`/api/users/\${userId}\`)
      .then(res => res.json())
      .then(data => setUser(data))
      .finally(() => setLoading(false));
  }, [userId]);

  // Validation logic
  const validateEmail = (email) => {
    return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
  };

  // Formatting logic
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
  };

  // Rendering logic
  return (
    <div>
      {loading ? <Spinner /> : (
        <div>
          <h2>{user.name}</h2>
          <p>{validateEmail(user.email) ? user.email : 'Invalid'}</p>
          <p>Joined: {formatDate(user.joinDate)}</p>
        </div>
      )}
    </div>
  );
};`}
        </pre>
        <div className="mt-4 bg-red-100 p-4 rounded">
          <p className="text-red-800 font-semibold">Problems:</p>
          <ul className="list-disc list-inside text-red-700 mt-2 space-y-1">
            <li>Handles data fetching, validation, formatting, and rendering</li>
            <li>Hard to test individual pieces</li>
            <li>Changes to one responsibility affect the entire component</li>
          </ul>
        </div>
      </div>

      {/* Good Example */}
      <div className="bg-green-50 rounded-lg p-6 border border-green-200">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-2">✅</span>
          <h3 className="text-xl font-bold text-green-800">Good Example - Single Responsibilities</h3>
        </div>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`// ✅ Good: Separated concerns

// Hook for data fetching
const useUser = (userId) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(\`/api/users/\${userId}\`)
      .then(res => res.json())
      .then(data => setUser(data))
      .finally(() => setLoading(false));
  }, [userId]);

  return { user, loading };
};

// Utility for validation
const validateEmail = (email) => {
  return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
};

// Utility for formatting
const formatDate = (date) => {
  return new Date(date).toLocaleDateString();
};

// Component only handles rendering
const UserProfile = ({ userId }) => {
  const { user, loading } = useUser(userId);

  if (loading) return <Spinner />;

  return (
    <div>
      <h2>{user.name}</h2>
      <UserEmail email={user.email} />
      <UserJoinDate date={user.joinDate} />
    </div>
  );
};

const UserEmail = ({ email }) => (
  <p>{validateEmail(email) ? email : 'Invalid email'}</p>
);

const UserJoinDate = ({ date }) => (
  <p>Joined: {formatDate(date)}</p>
);`}
        </pre>
        <div className="mt-4 bg-green-100 p-4 rounded">
          <p className="text-green-800 font-semibold">Benefits:</p>
          <ul className="list-disc list-inside text-green-700 mt-2 space-y-1">
            <li>Each component/function has one clear responsibility</li>
            <li>Easy to test, maintain, and modify</li>
            <li>Reusable hooks and utilities</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// ============================================
// 2. OPEN/CLOSED PRINCIPLE
// ============================================
const OpenClosed = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-500">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          Open/Closed Principle (OCP)
        </h2>
        <p className="text-gray-600 text-lg mb-4">
          Components should be open for extension but closed for modification.
        </p>
      </div>

      {/* Bad Example */}
      <div className="bg-red-50 rounded-lg p-6 border border-red-200">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-2">❌</span>
          <h3 className="text-xl font-bold text-red-800">Bad Example - Hard-coded Logic</h3>
        </div>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`// ❌ Bad: Must modify component to add new button types
const Button = ({ type, children }) => {
  if (type === 'primary') {
    return (
      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        {children}
      </button>
    );
  }
  
  if (type === 'secondary') {
    return (
      <button className="bg-gray-600 text-white px-4 py-2 rounded">
        {children}
      </button>
    );
  }
  
  if (type === 'danger') {
    return (
      <button className="bg-red-600 text-white px-4 py-2 rounded">
        {children}
      </button>
    );
  }
  
  // Need to modify this component to add new types!
  return <button>{children}</button>;
};`}
        </pre>
        <div className="mt-4 bg-red-100 p-4 rounded">
          <p className="text-red-800 font-semibold">Problems:</p>
          <ul className="list-disc list-inside text-red-700 mt-2 space-y-1">
            <li>Must modify component code to add new button styles</li>
            <li>Growing if-else chain</li>
            <li>Violates open/closed principle</li>
          </ul>
        </div>
      </div>

      {/* Good Example */}
      <div className="bg-green-50 rounded-lg p-6 border border-green-200">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-2">✅</span>
          <h3 className="text-xl font-bold text-green-800">Good Example - Extensible Design</h3>
        </div>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`// ✅ Good: Open for extension, closed for modification
const Button = ({ className, children, ...props }) => {
  return (
    <button 
      className={\`px-4 py-2 rounded font-medium \${className}\`}
      {...props}
    >
      {children}
    </button>
  );
};

// Extend without modifying the base component
const PrimaryButton = ({ children, ...props }) => (
  <Button className="bg-blue-600 text-white hover:bg-blue-700" {...props}>
    {children}
  </Button>
);

const SecondaryButton = ({ children, ...props }) => (
  <Button className="bg-gray-600 text-white hover:bg-gray-700" {...props}>
    {children}
  </Button>
);

const DangerButton = ({ children, ...props }) => (
  <Button className="bg-red-600 text-white hover:bg-red-700" {...props}>
    {children}
  </Button>
);

// Easy to add new button types without changing Button!
const SuccessButton = ({ children, ...props }) => (
  <Button className="bg-green-600 text-white hover:bg-green-700" {...props}>
    {children}
  </Button>
);

// Usage
<PrimaryButton onClick={() => alert('Primary')}>
  Primary Action
</PrimaryButton>`}
        </pre>
        <div className="mt-4 bg-green-100 p-4 rounded">
          <p className="text-green-800 font-semibold">Benefits:</p>
          <ul className="list-disc list-inside text-green-700 mt-2 space-y-1">
            <li>Add new button types without modifying base component</li>
            <li>Composition over modification</li>
            <li>Flexible and maintainable</li>
          </ul>
        </div>
      </div>

      {/* Live Demo */}
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg font-bold text-gray-800 mb-4">🎨 Live Demo</h3>
        <div className="flex flex-wrap gap-3">
          <button className="px-4 py-2 rounded font-medium bg-blue-600 text-white hover:bg-blue-700">
            Primary
          </button>
          <button className="px-4 py-2 rounded font-medium bg-gray-600 text-white hover:bg-gray-700">
            Secondary
          </button>
          <button className="px-4 py-2 rounded font-medium bg-red-600 text-white hover:bg-red-700">
            Danger
          </button>
          <button className="px-4 py-2 rounded font-medium bg-green-600 text-white hover:bg-green-700">
            Success
          </button>
        </div>
      </div>
    </div>
  );
};

// ============================================
// 3. LISKOV SUBSTITUTION PRINCIPLE
// ============================================
const LiskovSubstitution = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          Liskov Substitution Principle (LSP)
        </h2>
        <p className="text-gray-600 text-lg mb-4">
          Subtypes must be substitutable for their base types without altering program correctness.
        </p>
      </div>

      {/* Bad Example */}
      <div className="bg-red-50 rounded-lg p-6 border border-red-200">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-2">❌</span>
          <h3 className="text-xl font-bold text-red-800">Bad Example - Broken Substitution</h3>
        </div>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`// ❌ Bad: TextInput violates expected behavior
const Input = ({ value, onChange, ...props }) => (
  <input 
    value={value}
    onChange={onChange}
    {...props}
  />
);

// Breaks substitutability - doesn't accept onChange!
const ReadOnlyInput = ({ value, ...props }) => (
  <input 
    value={value}
    readOnly
    {...props}
  />
);

// This will break - ReadOnlyInput doesn't work the same way
const Form = ({ InputComponent }) => {
  const [text, setText] = useState('');
  
  return (
    <InputComponent 
      value={text}
      onChange={(e) => setText(e.target.value)} // ❌ Won't work with ReadOnlyInput!
    />
  );
};`}
        </pre>
        <div className="mt-4 bg-red-100 p-4 rounded">
          <p className="text-red-800 font-semibold">Problems:</p>
          <ul className="list-disc list-inside text-red-700 mt-2 space-y-1">
            <li>ReadOnlyInput can't replace Input without breaking behavior</li>
            <li>Different interface expectations</li>
            <li>Parent components need to know about implementation details</li>
          </ul>
        </div>
      </div>

      {/* Good Example */}
      <div className="bg-green-50 rounded-lg p-6 border border-green-200">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-2">✅</span>
          <h3 className="text-xl font-bold text-green-800">Good Example - Proper Substitution</h3>
        </div>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`// ✅ Good: Consistent interface across all input types
const BaseInput = ({ value, onChange, disabled, ...props }) => (
  <input
    value={value}
    onChange={onChange}
    disabled={disabled}
    className="border rounded px-3 py-2"
    {...props}
  />
);

const TextInput = ({ value, onChange, ...props }) => (
  <BaseInput
    type="text"
    value={value}
    onChange={onChange}
    {...props}
  />
);

const ReadOnlyInput = ({ value, onChange, ...props }) => (
  <BaseInput
    value={value}
    onChange={onChange} // Still accepts it, just disabled
    disabled={true}
    {...props}
  />
);

const NumberInput = ({ value, onChange, ...props }) => (
  <BaseInput
    type="number"
    value={value}
    onChange={onChange}
    {...props}
  />
);

// All inputs can be substituted without breaking
const Form = ({ InputComponent = TextInput }) => {
  const [text, setText] = useState('Hello');
  
  return (
    <div>
      <InputComponent 
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Value: {text}</p>
    </div>
  );
};

// Works with any input type!
<Form InputComponent={TextInput} />
<Form InputComponent={ReadOnlyInput} />
<Form InputComponent={NumberInput} />`}
        </pre>
        <div className="mt-4 bg-green-100 p-4 rounded">
          <p className="text-green-800 font-semibold">Benefits:</p>
          <ul className="list-disc list-inside text-green-700 mt-2 space-y-1">
            <li>All input variants have consistent interface</li>
            <li>Can be freely substituted without breaking code</li>
            <li>Predictable behavior across components</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// ============================================
// 4. INTERFACE SEGREGATION PRINCIPLE
// ============================================
const InterfaceSegregation = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-teal-500">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          Interface Segregation Principle (ISP)
        </h2>
        <p className="text-gray-600 text-lg mb-4">
          Components should not be forced to depend on props they don't use.
        </p>
      </div>

      {/* Bad Example */}
      <div className="bg-red-50 rounded-lg p-6 border border-red-200">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-2">❌</span>
          <h3 className="text-xl font-bold text-red-800">Bad Example - Fat Interface</h3>
        </div>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`// ❌ Bad: Bloated props interface
const VideoPlayer = ({
  url,
  autoplay,
  controls,
  loop,
  muted,
  poster,
  preload,
  onPlay,
  onPause,
  onEnded,
  onError,
  onLoadStart,
  onLoadedData,
  onTimeUpdate,
  onVolumeChange,
  onSeeking,
  onSeeked,
  width,
  height,
  className,
  // ... 20+ more props
}) => {
  // Simple use case only needs 3 props but forced to know about all!
  return <video src={url} controls={controls} />;
};

// Overwhelming to use even for simple cases
<VideoPlayer 
  url="/video.mp4"
  controls={true}
  // Must understand all other props even if not needed
/>`}
        </pre>
        <div className="mt-4 bg-red-100 p-4 rounded">
          <p className="text-red-800 font-semibold">Problems:</p>
          <ul className="list-disc list-inside text-red-700 mt-2 space-y-1">
            <li>Too many props to understand and manage</li>
            <li>Simple use cases forced to deal with complexity</li>
            <li>Hard to document and maintain</li>
          </ul>
        </div>
      </div>

      {/* Good Example */}
      <div className="bg-green-50 rounded-lg p-6 border border-green-200">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-2">✅</span>
          <h3 className="text-xl font-bold text-green-800">Good Example - Segregated Interfaces</h3>
        </div>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`// ✅ Good: Small, focused components
// Basic video player - minimal props
const VideoPlayer = ({ url, className }) => (
  <video src={url} className={className} />
);

// Controlled video player - only control props
const ControlledVideoPlayer = ({ 
  url, 
  controls = true, 
  autoplay = false,
  className 
}) => (
  <video 
    src={url} 
    controls={controls}
    autoplay={autoplay}
    className={className}
  />
);

// Advanced video player - event handlers
const AdvancedVideoPlayer = ({
  url,
  controls,
  onPlay,
  onPause,
  onEnded,
  className
}) => (
  <video
    src={url}
    controls={controls}
    onPlay={onPlay}
    onPause={onPause}
    onEnded={onEnded}
    className={className}
  />
);

// Composition for complex use cases
const FullFeaturedPlayer = (props) => {
  const { 
    url, 
    controls, 
    onPlay, 
    onPause,
    poster,
    dimensions,
    ...rest 
  } = props;
  
  return (
    <div style={dimensions}>
      <AdvancedVideoPlayer
        url={url}
        controls={controls}
        onPlay={onPlay}
        onPause={onPause}
        {...rest}
      />
    </div>
  );
};

// Usage - choose the right tool for the job!
<VideoPlayer url="/simple.mp4" />
<ControlledVideoPlayer url="/video.mp4" controls />
<AdvancedVideoPlayer 
  url="/video.mp4"
  controls
  onPlay={() => console.log('Playing')}
/>`}
        </pre>
        <div className="mt-4 bg-green-100 p-4 rounded">
          <p className="text-green-800 font-semibold">Benefits:</p>
          <ul className="list-disc list-inside text-green-700 mt-2 space-y-1">
            <li>Small, focused interfaces for each use case</li>
            <li>Simple components stay simple</li>
            <li>Compose complex behavior when needed</li>
            <li>Easier to understand and use</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// ============================================
// 5. DEPENDENCY INVERSION PRINCIPLE
// ============================================
const DependencyInversion = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-pink-500">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          Dependency Inversion Principle (DIP)
        </h2>
        <p className="text-gray-600 text-lg mb-4">
          Depend on abstractions (props, interfaces), not concrete implementations.
        </p>
      </div>

      {/* Bad Example */}
      <div className="bg-red-50 rounded-lg p-6 border border-red-200">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-2">❌</span>
          <h3 className="text-xl font-bold text-red-800">Bad Example - Tight Coupling</h3>
        </div>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`// ❌ Bad: UserList depends on concrete API implementation
const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // Tightly coupled to fetch API
    fetch('/api/users')
      .then(res => res.json())
      .then(data => setUsers(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

// Can't test without real API
// Can't swap data sources
// Can't reuse with different data fetching strategies`}
        </pre>
        <div className="mt-4 bg-red-100 p-4 rounded">
          <p className="text-red-800 font-semibold">Problems:</p>
          <ul className="list-disc list-inside text-red-700 mt-2 space-y-1">
            <li>Component tightly coupled to fetch API</li>
            <li>Hard to test without real network calls</li>
            <li>Can't reuse with different data sources</li>
            <li>Can't easily mock or stub data</li>
          </ul>
        </div>
      </div>

      {/* Good Example */}
      <div className="bg-green-50 rounded-lg p-6 border border-green-200">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-2">✅</span>
          <h3 className="text-xl font-bold text-green-800">Good Example - Dependency Injection</h3>
        </div>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`// ✅ Good: Depend on abstractions (props/hooks)

// Abstract data fetching into a hook
const useUsers = (fetchUsers) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchUsers()
      .then(data => setUsers(data))
      .finally(() => setLoading(false));
  }, [fetchUsers]);

  return { users, loading };
};

// Component depends on abstraction (props), not implementation
const UserList = ({ fetchUsers }) => {
  const { users, loading } = useUsers(fetchUsers);

  if (loading) return <div>Loading...</div>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

// Different implementations can be injected

// API implementation
const fetchUsersFromAPI = async () => {
  const res = await fetch('/api/users');
  return res.json();
};

// Mock implementation for testing
const fetchMockUsers = async () => {
  return [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ];
};

// LocalStorage implementation
const fetchUsersFromStorage = async () => {
  const data = localStorage.getItem('users');
  return JSON.parse(data || '[]');
};

// Usage - inject different implementations!
<UserList fetchUsers={fetchUsersFromAPI} />
<UserList fetchUsers={fetchMockUsers} />
<UserList fetchUsers={fetchUsersFromStorage} />

// Easy to test with mocks
test('renders user list', () => {
  render(<UserList fetchUsers={fetchMockUsers} />);
  // ...
});`}
        </pre>
        <div className="mt-4 bg-green-100 p-4 rounded">
          <p className="text-green-800 font-semibold">Benefits:</p>
          <ul className="list-disc list-inside text-green-700 mt-2 space-y-1">
            <li>Component doesn't know about implementation details</li>
            <li>Easy to test with mock functions</li>
            <li>Can swap data sources without changing component</li>
            <li>Flexible and reusable</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Solidnew;