export const ReactRoutes = [
    {
    "title": "BASICS",
    "path": "/basics",
    "component": "Basics",
    "componentPath": "/basics/Basics",
    "children": [
      { "title": "What is React", "path": "/basics/what-is-react", "component": "WhatIsReact", "componentPath": "/basics/WhatIsReact" },
      { "title": "Advantages & Limitations", "path": "/basics/advantages-limitations", "component": "AdvantagesLimitations", "componentPath": "/basics/AdvantagesLimitations" },
      { "title": "JSX", "path": "/basics/jsx", "component": "JSX", "componentPath": "basics/JSX" },
      { "title": "Virtual DOM", "path": "/basics/virtual-dom", "component": "VirtualDOM", "componentPath": "/basics/VirtualDOM" },
      { "title": "Diffing & Reconciliation", "path": "/basics/diffing-reconciliation", "component": "DiffingReconciliation", "componentPath": "/basics/DiffingReconciliation" },
      { "title": "Functional vs Class Components", "path": "/basics/functional-vs-class-components", "component": "FunctionalVsClassComponents", "componentPath": "/basics/FunctionalVsClassComponents" },
      { "title": "Stateful vs Stateless", "path": "/basics/stateful-vs-stateless", "component": "StatefulVsStateless", "componentPath": "/basics/StatefulVsStateless" },
      { "title": "Lifecycle Methods (class)", "path": "/basics/lifecycle-methods-class", "component": "LifecycleMethodsClass", "componentPath": "/basics/LifecycleMethodsClass" },
      {
        "title": "Events",
        "path": "/basics/events",
        "component": "Events",
        "componentPath": "/basics/Events",
        "children": [
          { "title": "Synthetic Events", "path": "/basics/events/synthetic-events", "component": "SyntheticEvents", "componentPath": "/basics/events/SyntheticEvents" },
          { "title": "Event Bubbling", "path": "/basics/events/event-bubbling", "component": "EventBubbling", "componentPath": "/basics/events/EventBubbling" },
          { "title": "Event Delegation", "path": "/basics/events/event-delegation", "component": "EventDelegation", "componentPath": "/basics/events/EventDelegation" }
        ]
      }
    ]
  },
    {
      "title": "CORE CONCEPTS",
      "path": "/core-concepts",
      "component": "CoreConcepts",
      "componentPath": "/core-concepts/CoreConcepts",
      "children": [
        { "title": "Props & State", "path": "/core-concepts/props-state", "component": "PropsState", "componentPath": "/core-concepts/PropsState" },
        { "title": "Keys (in lists)", "path": "/core-concepts/keys-in-lists", "component": "KeysInLists", "componentPath": "/core-concepts/KeysInLists" },
        { "title": "Lifting State Up", "path": "/core-concepts/lifting-state-up", "component": "LiftingStateUp", "componentPath": "/core-concepts/LiftingStateUp" },
        {
          "title": "Forms",
          "path": "/core-concepts/forms",
          "component": "Forms",
          "componentPath": "/core-concepts/Forms",
          "children": [
            { "title": "Controlled Components", "path": "/core-concepts/forms/controlled-components", "component": "ControlledComponents", "componentPath": "/core-concepts/forms/ControlledComponents" },
            { "title": "Uncontrolled Components", "path": "/core-concepts/forms/uncontrolled-components", "component": "UncontrolledComponents", "componentPath": "/core-concepts/forms/UncontrolledComponents" }
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
          "componentPath": "/hooks/BasicHooks",
          "children": [
            { "title": "useState", "path": "/hooks/basic/use-state", "component": "UseState", "componentPath": "/hooks/basic/UseState" },
            { "title": "useEffect vs useLayoutEffect", "path": "/hooks/basic/useeffect-vs-uselayouteffect", "component": "UseEffectVsUseLayoutEffect", "componentPath": "/hooks/basic/UseEffectVsUseLayoutEffect" }
          ]
        },
        {
          "title": "Performance",
          "path": "/hooks/performance",
          "component": "PerformanceHooks",
          "componentPath": "/hooks/PerformanceHooks",
          "children": [
            { "title": "useCallback", "path": "/hooks/performance/use-callback", "component": "UseCallback", "componentPath": "/hooks/performance/UseCallback" },
            { "title": "useMemo", "path": "/hooks/performance/use-memo", "component": "UseMemo", "componentPath": "/hooks/performance/UseMemo" },
            { "title": "React.memo", "path": "/hooks/performance/react-memo", "component": "ReactMemo", "componentPath": "/hooks/performance/ReactMemo" }
          ]
        },
        {
          "title": "Advanced",
          "path": "/hooks/advanced",
          "component": "AdvancedHooks",
          "componentPath": "/hooks/AdvancedHooks",
          "children": [
            { "title": "useContext", "path": "/hooks/advanced/use-context", "component": "UseContext", "componentPath": "/hooks/advanced/UseContext" },
            { "title": "useReducer", "path": "/hooks/advanced/use-reducer", "component": "UseReducer", "componentPath": "/hooks/advanced/UseReducer" },
            { "title": "useRef", "path": "/hooks/advanced/use-ref", "component": "UseRef", "componentPath": "/hooks/advanced/UseRef" },
            { "title": "useTransition", "path": "/hooks/advanced/use-transition", "component": "UseTransition", "componentPath": "/hooks/advanced/UseTransition" },
            { "title": "Custom Hooks", "path": "/hooks/advanced/custom-hooks", "component": "CustomHooks", "componentPath": "/hooks/advanced/CustomHooks" }
          ]
        }
      ]
    },
    {
      "title": "EXTRA / INTERVIEW MUST-KNOW",
      "path": "/extra",
      "component": "Extra",
      "componentPath": "/extra/Extra",
      "children": [
        { "title": "Performance Optimization (lazy load, memoization)", "path": "/extra/performance-optimization", "component": "PerformanceOptimization", "componentPath": "/extra/PerformanceOptimization" },
        { "title": "Testing (Jest, RTL)", "path": "/extra/testing", "component": "Testing", "componentPath": "/extra/Testing" },
        { "title": "Error Boundaries", "path": "/extra/error-boundaries", "component": "ErrorBoundaries", "componentPath": "/extra/ErrorBoundaries" },
        { "title": "React Fiber (architecture)", "path": "/extra/react-fiber", "component": "ReactFiber", "componentPath": "/extra/ReactFiber" },
        { "title": "StrictMode", "path": "/extra/strict-mode", "component": "StrictMode", "componentPath": "extra/StrictMode" },
        { "title": "Hydration", "path": "/extra/hydration", "component": "Hydration", "componentPath": "/extra/Hydration" },
        { "title": "Server Components (React 18+)", "path": "/extra/server-components", "component": "ServerComponents", "componentPath": "/extra/ServerComponents" }
      ]
    }
  ]

