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

export const filterRoutes = (routes, query) => {
  if (!query) return routes;
  const lower = query.toLowerCase();

  return routes
    .map((route) => {
      const matches =
        route.title.toLowerCase().includes(lower) ||
        route.path.toLowerCase().includes(lower);

      if (route.children) {
        const filteredChildren = filterRoutes(route.children, query);
        if (filteredChildren.length > 0 || matches) {
          return { ...route, children: filteredChildren };
        }
      }

      return matches ? { ...route } : null;
    })
    .filter(Boolean);
};