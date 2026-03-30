import { memo } from "react";

export default memo(function A({ increment }: { increment: () => void }) {
  console.log("A render");
  return (
    <>
      <h1>A Component </h1>
      <button onClick={increment}>증가</button>
    </>
  );
});