import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  // 상태 변경 함수는 아래 두 가지 방식으로 호출할 수 있다.
  const clickHandler = () => {
    // 1씩 증가
    // setCount(count + 1);
    // setCount(count + 1);

    // 2씩 증가
    // 이전 상태 값을 기반으로 상태 변경
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  }

  return (
    <>
      <div>
        <p>{count}</p>
        <button onClick={clickHandler}>Value Change</button>
      </div>
    </>
  )
}