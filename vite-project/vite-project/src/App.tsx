import { useState } from "react";
import FetchUser from "./components/FetchUser";
import Timer from "./components/Timer";
import ScrollTracker from "./components/ScrollTracker";
import AutoSaveForm from "./components/AutoSaveForm";

export default function App() {
  const [show, setShow] = useState(true);

  return (
    <>
      <FetchUser />
      {show && <Timer />}
      {/* {show && <ScrollTracker />} */}
      {show && <AutoSaveForm />}
      <button onClick={() => setShow(!show)}>Toggle</button>
    </>
  )
}