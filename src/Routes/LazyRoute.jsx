import React, { Suspense, lazy } from "react";

export const LazyRoute = ({ componentPath }) => {
  const Component = lazy(() => import(/* @vite-ignore */`../${componentPath}`));
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  );
};
