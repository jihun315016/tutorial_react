import { lazy, Suspense, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Loading from "./components/Loading";
import Fallback from "./components/Fallback";
type LazyModuleDefault = typeof import("./components/LazyComponentError").default;

const LazyComponentError = lazy<LazyModuleDefault>(
  () =>
    new Promise<{ default: LazyModuleDefault }>((resolve) => {
      setTimeout(() => {
        import("./components/LazyComponentError").then((mod) => {
          resolve(mod);
        });
      }, 2000);
    })
);

export default function App() {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <button onClick={() => setIsShow((s) => !s)}>Toggle</button>
      {isShow && (
        <ErrorBoundary FallbackComponent={Fallback}>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyComponentError />
          </Suspense>
        </ErrorBoundary>
      )}
    </>
  );
}