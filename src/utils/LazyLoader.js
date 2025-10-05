import { lazy } from "react";

const componentCache = {};

export const lazyLoadComponent = (componentPath) => {
  return lazy(() => import(`../pages/${componentPath}`));
};

export const getCachedComponent = (route) => {
  if (!componentCache[route.component]) {
    componentCache[route.component] = lazyLoadComponent(route.componentPath);
  }
  return componentCache[route.component];
};

export const findRouteByPath = (routes, path) => {
  for (const route of routes) {
    if (route.path === path) return route;
    if (route.children) {
      const found = findRouteByPath(route.children, path);
      if (found) return found;
    }
  }
  return null;
};