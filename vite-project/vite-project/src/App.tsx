import { lazy, useState } from "react";
const LazyComponent = lazy(() => import('./components/LazyComponent'));

export default function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      {show && <LazyComponent />}
      <button onClick={() => setShow(!show)}>Toggle</button>
    </>
  );
}