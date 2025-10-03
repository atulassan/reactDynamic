export const ReactRoutes = [
    {
    "title": "BASICS",
    "path": "/basics",
    "component": "Basics",
    "componentPath": "/react/basics/Basics",
    "children": [
      { "title": "What is React", "path": "/basics/what-is-react", "component": "WhatIsReact", "componentPath": "/react/basics/WhatIsReact" },
      { "title": "Advantages & Limitations", "path": "/basics/advantages-limitations", "component": "AdvantagesLimitations", "componentPath": "/react/basics/AdvantagesLimitations" },
      { "title": "JSX", "path": "/basics/jsx", "component": "JSX", "componentPath": "/react/basics/JSX" },
      { "title": "Virtual DOM", "path": "/basics/virtual-dom", "component": "VirtualDOM", "componentPath": "/react/basics/VirtualDOM" },
      { "title": "Diffing & Reconciliation", "path": "/basics/diffing-reconciliation", "component": "DiffingReconciliation", "componentPath": "/react/basics/DiffingReconciliation" },
      { "title": "Functional vs Class Components", "path": "/basics/functional-vs-class-components", "component": "FunctionalVsClassComponents", "componentPath": "/react/basics/FunctionalVsClassComponents" },
      { "title": "Stateful vs Stateless", "path": "/basics/stateful-vs-stateless", "component": "StatefulVsStateless", "componentPath": "/react/basics/StatefulVsStateless" },
      { "title": "Lifecycle Methods (class)", "path": "/basics/lifecycle-methods-class", "component": "LifecycleMethodsClass", "componentPath": "/react/basics/LifecycleMethodsClass" },
      {
        "title": "Events",
        "path": "/basics/events",
        "component": "Events",
        "componentPath": "/react/basics/Events",
        "children": [
          { "title": "Synthetic Events", "path": "/basics/events/synthetic-events", "component": "SyntheticEvents", "componentPath": "react/basics/events/SyntheticEvents" },
          { "title": "Event Bubbling", "path": "/basics/events/event-bubbling", "component": "EventBubbling", "componentPath": "react/basics/events/EventBubbling" },
          { "title": "Event Delegation", "path": "/basics/events/event-delegation", "component": "EventDelegation", "componentPath": "react/basics/events/EventDelegation" }
        ]
      }
    ]
  },
    {
      "title": "CORE CONCEPTS",
      "path": "/core-concepts",
      "component": "CoreConcepts",
      "componentPath": "/react/core-concepts/CoreConcepts",
      "children": [
        { "title": "Props & State", "path": "/core-concepts/props-state", "component": "PropsState", "componentPath": "/react/core-concepts/PropsState" },
        { "title": "Keys (in lists)", "path": "/core-concepts/keys-in-lists", "component": "KeysInLists", "componentPath": "/react/core-concepts/KeysInLists" },
        { "title": "Lifting State Up", "path": "/core-concepts/lifting-state-up", "component": "LiftingStateUp", "componentPath": "/react/core-concepts/LiftingStateUp" },
        {
          "title": "Forms",
          "path": "/core-concepts/forms",
          "component": "Forms",
          "componentPath": "/core-concepts/Forms",
          "children": [
            { "title": "Controlled Components", "path": "/core-concepts/forms/controlled-components", "component": "ControlledComponents", "componentPath": "/react/core-concepts/forms/ControlledComponents" },
            { "title": "Uncontrolled Components", "path": "/core-concepts/forms/uncontrolled-components", "component": "UncontrolledComponents", "componentPath": "/react/core-concepts/forms/UncontrolledComponents" }
          ]
        }
      ]
    },
    {
      "title": "HOOKS",
      "path": "/hooks",
      "component": "Hooks",
      "componentPath": "/hooks/Hooks",
      "children": [
        {
          "title": "Basic",
          "path": "/hooks/basic",
          "component": "BasicHooks",
          "componentPath": "/react/hooks/BasicHooks",
          "children": [
            { "title": "useState", "path": "/hooks/basic/use-state", "component": "UseState", "componentPath": "/react/hooks/basic/UseState" },
            { "title": "useEffect vs useLayoutEffect", "path": "/hooks/basic/useeffect-vs-uselayouteffect", "component": "UseEffectVsUseLayoutEffect", "componentPath": "/react/hooks/basic/UseEffectVsUseLayoutEffect" }
          ]
        },
        {
          "title": "Performance",
          "path": "/hooks/performance",
          "component": "PerformanceHooks",
          "componentPath": "/hooks/PerformanceHooks",
          "children": [
            { "title": "useCallback", "path": "/hooks/performance/use-callback", "component": "UseCallback", "componentPath": "/react/hooks/performance/UseCallback" },
            { "title": "useMemo", "path": "/hooks/performance/use-memo", "component": "UseMemo", "componentPath": "/react/hooks/performance/UseMemo" },
            { "title": "React.memo", "path": "/hooks/performance/react-memo", "component": "ReactMemo", "componentPath": "/react/hooks/performance/ReactMemo" }
          ]
        },
        {
          "title": "Advanced",
          "path": "/hooks/advanced",
          "component": "AdvancedHooks",
          "componentPath": "/react/hooks/AdvancedHooks",
          "children": [
            { "title": "useContext", "path": "/hooks/advanced/use-context", "component": "UseContext", "componentPath": "/react/hooks/advanced/UseContext" },
            { "title": "useReducer", "path": "/hooks/advanced/use-reducer", "component": "UseReducer", "componentPath": "/react/hooks/advanced/UseReducer" },
            { "title": "useRef", "path": "/hooks/advanced/use-ref", "component": "UseRef", "componentPath": "/react/hooks/advanced/UseRef" },
            { "title": "useTransition", "path": "/hooks/advanced/use-transition", "component": "UseTransition", "componentPath": "/react/hooks/advanced/UseTransition" },
            { "title": "Custom Hooks", "path": "/hooks/advanced/custom-hooks", "component": "CustomHooks", "componentPath": "/react/hooks/advanced/CustomHooks" }
          ]
        }
      ]
    },
    {
      "title": "EXTRA / INTERVIEW MUST-KNOW",
      "path": "/extra",
      "component": "Extra",
      "componentPath": "/react/extra/Extra",
      "children": [
        { "title": "Performance Optimization (lazy load, memoization)", "path": "/extra/performance-optimization", "component": "PerformanceOptimization", "componentPath": "/react/extra/PerformanceOptimization" },
        { "title": "Testing (Jest, RTL)", "path": "/extra/testing", "component": "Testing", "componentPath": "/react/extra/Testing" },
        { "title": "Error Boundaries", "path": "/extra/error-boundaries", "component": "ErrorBoundaries", "componentPath": "/react/extra/ErrorBoundaries" },
        { "title": "React Fiber (architecture)", "path": "/extra/react-fiber", "component": "ReactFiber", "componentPath": "/react/extra/ReactFiber" },
        { "title": "StrictMode", "path": "/extra/strict-mode", "component": "StrictMode", "componentPath": "/react/extra/StrictMode" },
        { "title": "Hydration", "path": "/extra/hydration", "component": "Hydration", "componentPath": "/react/extra/Hydration" },
        { "title": "Server Components (React 18+)", "path": "/extra/server-components", "component": "ServerComponents", "componentPath": "/react/extra/ServerComponents" }
      ]
    },
    {
      "title": "Rendering Patterns",
      "path": "/rendering",
      "component": "RenderingPatterns",
      "componentPath": "/react/rendering/RenderingPatterns",
      "children": [
        { "title": "Design Patterns", "path": "/rendering/designpatterns", "component": "DesignPatterns", "componentPath": "/react/rendering/DesignPatterns" },
      ]
      },
    
  ];

 export const JavascriptRoutes = [
    {
      "title": "Foundations",
      "path": "/javascript/foundations",
      "component": "Foundations",
      "componentPath": "/javascript/foundations/Foundations",
      "children": [
        { "title": "Scopes in JavaScript", "path": "/javascript/foundations/scopes", "component": "Scopes", "componentPath": "/javascript/foundations/Scopes" },
        { "title": "Hoisting", "path": "/javascript/foundations/hoisting", "component": "Hoisting", "componentPath": "/javascript/foundations/Hoisting" },
        { "title": "Temporal Dead Zone", "path": "/javascript/foundations/tdz", "component": "TemporalDeadZone", "componentPath": "/javascript/foundations/TemporalDeadZone" },
        { "title": "Type Coercion & Equality", "path": "/javascript/foundations/type-coercion", "component": "TypeCoercion", "componentPath": "/javascript/foundations/TypeCoercion" },
        { "title": "Strict Mode", "path": "/javascript/foundations/strict-mode", "component": "StrictMode", "componentPath": "/javascript/foundations/StrictMode" }
      ]
    },
    {
      "title": "Objects & Functions",
      "path": "/javascript/objects-functions",
      "component": "ObjectsFunctions",
      "componentPath": "/javascript/objects-functions/ObjectsFunctions",
      "children": [
        { "title": "Objects & Methods", "path": "/javascript/objects-functions/objects", "component": "ObjectsMethods", "componentPath": "/javascript/objects-functions/ObjectsMethods" },
        { "title": "Arrays & Methods", "path": "/javascript/objects-functions/arrays", "component": "ArraysMethods", "componentPath": "/javascript/objects-functions/ArraysMethods" },
        { "title": "Set / Map / WeakSet / WeakMap", "path": "/javascript/objects-functions/collections", "component": "Collections", "componentPath": "/javascript/objects-functions/Collections" },
        { "title": "Advanced Data & Structures", "path": "/javascript/objects-functions/datastructures", "component": "DataStructures", "componentPath": "/javascript/objects-functions/DataStructures" },
        { "title": "Symbols", "path": "/javascript/objects-functions/symbols", "component": "Symbols", "componentPath": "/javascript/objects-functions/Symbols" },
        { "title": "Deep vs Shallow Copy", "path": "/javascript/objects-functions/copy", "component": "DeepShallowCopy", "componentPath": "/javascript/objects-functions/DeepShallowCopy" },
        { "title": "Prototype & Inheritance", "path": "/javascript/objects-functions/prototype", "component": "Prototype", "componentPath": "/javascript/objects-functions/Prototype" },
        { "title": "Prototype Chain", "path": "/javascript/objects-functions/prototype-chain", "component": "PrototypeChain", "componentPath": "/javascript/objects-functions/PrototypeChain" },
        { "title": "Prototype vs Classical Inheritance", "path": "/javascript/objects-functions/inheritance", "component": "Inheritance", "componentPath": "/javascript/objects-functions/Inheritance" },
        { "title": "Instances / Implements / Extends", "path": "/javascript/objects-functions/oop-basics", "component": "OOPBasics", "componentPath": "/javascript/objects-functions/OOPBasics" },
        { "title": "OOPS Principles", "path": "/javascript/objects-functions/oops", "component": "OOPS", "componentPath": "/javascript/objects-functions/OOPS" },
        { "title": "Deep dive", "path": "/javascript/objects-functions/oopsnew", "component": "OOPSnew", "componentPath": "/javascript/objects-functions/OOPSnew" }
      ]
    },
    {
      "title": "Functions in Depth",
      "path": "/javascript/functions",
      "component": "Functions",
      "componentPath": "/javascript/functions/Functions",
      "children": [
        { "title": "Call Apply Bind", "path": "/javascript/functions/callapplybind", "component": "CallApplyBind", "componentPath": "/javascript/functions/CallApplyBind" },
        { "title": "Functional Types", "path": "/javascript/functions/types", "component": "FunctionalTypes", "componentPath": "/javascript/functions/FunctionalTypes" },
        { "title": "Pure Functions", "path": "/javascript/functions/pure", "component": "PureFunctions", "componentPath": "/javascript/functions/PureFunctions" },
        { "title": "Higher Order Functions", "path": "/javascript/functions/hof", "component": "HOF", "componentPath": "/javascript/functions/HOF" },
        { "title": "Currying", "path": "/javascript/functions/currying", "component": "Currying", "componentPath": "/javascript/functions/Currying" },
        { "title": "Rest vs Spread Operator", "path": "/javascript/functions/rest-spread", "component": "RestSpread", "componentPath": "/javascript/functions/RestSpread" },
        { "title": "Destructuring", "path": "/javascript/functions/destructuring", "component": "Destructuring", "componentPath": "/javascript/functions/Destructuring" },
        { "title": "Optional Chaining", "path": "/javascript/functions/optional-chaining", "component": "OptionalChaining", "componentPath": "/javascript/functions/OptionalChaining" },
        { "title": "Nullish Coalescing", "path": "/javascript/functions/nullish", "component": "NullishCoalescing", "componentPath": "/javascript/functions/NullishCoalescing" }
      ]
    },
    {
      "title": "Execution & Async",
      "path": "/javascript/async",
      "component": "Async",
      "componentPath": "/javascript/async/Async",
      "children": [
        { "title": "Event Loop", "path": "/javascript/async/event-loop", "component": "EventLoop", "componentPath": "/javascript/async/EventLoop" },
        { "title": "Synchronous vs Asynchronous", "path": "/javascript/async/sync-async", "component": "SyncAsync", "componentPath": "/javascript/async/SyncAsync" },
        { "title": "Promises", "path": "/javascript/async/promises", "component": "Promises", "componentPath": "/javascript/async/Promises" },
        { "title": "Error Handling", "path": "/javascript/async/error-handling", "component": "ErrorHandling", "componentPath": "/javascript/async/ErrorHandling" },
        { "title": "Event Bubbling", "path": "/javascript/async/event-bubbling", "component": "EventBubbling", "componentPath": "/javascript/async/EventBubbling" },
        { "title": "Event Delegation", "path": "/javascript/async/event-delegation", "component": "EventDelegation", "componentPath": "/javascript/async/EventDelegation" },
        { "title": "Debouncing", "path": "/javascript/async/debouncing", "component": "Debouncing", "componentPath": "/javascript/async/Debouncing" },
        { "title": "Throttling", "path": "/javascript/async/throttling", "component": "Throttling", "componentPath": "/javascript/async/Throttling" },
        { "title": "Memory Leaks", "path": "/javascript/async/memory-leaks", "component": "MemoryLeaks", "componentPath": "/javascript/async/MemoryLeaks" }
      ]
    },
    {
      "title": "Modules & Tooling",
      "path": "/javascript/modules",
      "component": "Modules",
      "componentPath": "/javascript/modules/Modules",
      "children": [
        { "title": "ES Modules", "path": "/javascript/modules/es-modules", "component": "ESModules", "componentPath": "/javascript/modules/ESModules" },
        { "title": "Modules vs CommonJS", "path": "/javascript/modules/modules-vs-commonjs", "component": "ModulesVsCommonJS", "componentPath": "/javascript/modules/ModulesVsCommonJS" },
        { "title": "Tree Shaking", "path": "/javascript/modules/tree-shaking", "component": "TreeShaking", "componentPath": "/javascript/modules/TreeShaking" },
        { "title": "Polyfills", "path": "/javascript/modules/polyfills", "component": "Polyfills", "componentPath": "/javascript/modules/Polyfills" },
        { "title": "Transpiling", "path": "/javascript/modules/transpiling", "component": "Transpiling", "componentPath": "/javascript/modules/Transpiling" }
      ]
    },
    {
      "title": "Browser & Advanced APIs",
      "path": "/javascript/browser",
      "component": "BrowserAPIs",
      "componentPath": "/javascript/browser/BrowserAPIs",
      "children": [
        { "title": "Storage Types", "path": "/javascript/browser/storage", "component": "StorageTypes", "componentPath": "/javascript/browser/StorageTypes" },
        { "title": "CORS", "path": "/javascript/browser/cors", "component": "CORS", "componentPath": "/javascript/browser/CORS" },
        { "title": "Service Workers", "path": "/javascript/browser/service-workers", "component": "ServiceWorkers", "componentPath": "/javascript/browser/ServiceWorkers" },
        { "title": "CSS in JS Context", "path": "/javascript/browser/css", "component": "CSS", "componentPath": "/javascript/browser/CSS" }
      ]
    },
    {
      "title": "Advanced & Architecture",
      "path": "/javascript/advanced",
      "component": "Advanced",
      "componentPath": "/javascript/advanced/Advanced",
      "children": [
        { "title": "Design Patterns", "path": "/javascript/advanced/design-patterns", "component": "DesignPatterns", "componentPath": "/javascript/advanced/DesignPatterns" },
        { "title": "SOLID Principles", "path": "/javascript/advanced/solid", "component": "Solid", "componentPath": "/javascript/advanced/Solid" },
        { "title": "SOLID Principles new", "path": "/javascript/advanced/solidnew", "component": "Solidnew", "componentPath": "/javascript/advanced/Solidnew" }
      ]
    }
  ];



