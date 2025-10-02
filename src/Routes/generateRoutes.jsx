import React from "react";
import { Route, Outlet } from "react-router-dom";
import { LazyRoute } from "./LazyRoute";

export const generateRoutes = (routesArray) =>
  routesArray.map((route) => {
    if (route.children && route.children.length > 0) {
      return (
        <Route
         exact
          key={route.path}
          path={route.path}
          element={<LazyRoute componentPath={route.componentPath} />}
        >
          {/* Render children recursively */}
          {generateRoutes(route.children)}
        </Route>
      );
    }

    return (
      <Route
        key={route.path}
        path={route.path}
        element={<LazyRoute componentPath={route.componentPath} />}
      />
    );
  });

  