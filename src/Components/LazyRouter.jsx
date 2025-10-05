
import { Suspense } from "react";
import { findRouteByPath, getCachedComponent } from "../utils/LazyLoader";
import { HomePage } from "./HomePage";
import { LoadingSpinner } from "./Modules/LoadingSpinner";
import { NotFound } from "./NotFound";
import { ErrorBoundary } from "./ErrorBoundary";

export const LazyRouter = ({
  routes, 
  currentPath, 
  homeComponent: HomeComponent = HomePage,
  notFoundComponent: NotFoundComponent = NotFound,
  loadingComponent: LoadingComponent = LoadingSpinner,
  errorBoundary = true,
  homeProps = {},
  onNavigate
}) => {
  const currentRoute = findRouteByPath(routes, currentPath);

  const renderContent = () => {
    if (currentPath === '/') {
      return <HomeComponent onNavigate={onNavigate} {...homeProps} />;
    }
    
    if (currentRoute) {
      const LazyComponent = getCachedComponent(currentRoute);
      return <LazyComponent />;
    }
    
    return <NotFoundComponent onNavigate={onNavigate} />;
  };

  const content = (
    <Suspense fallback={<LoadingComponent />}>
      {renderContent()}
    </Suspense>
  );

  return errorBoundary ? (
    <ErrorBoundary>{content}</ErrorBoundary>
  ) : content;
};