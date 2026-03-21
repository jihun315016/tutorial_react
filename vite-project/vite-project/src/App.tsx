import { useState } from 'react';
import Count from './components/Count';
import Count2 from './components/Count2';

export default function App() {
  // 상태 관리 패턴 1
  const [count, setCount] = useState(0);

  // 상태 관리 패턴 2
  const [count2, setCount2] = useState(0);
  const increment = () => setCount2((count) => count + 1);

  return (
    <>
      <div>
        <Count count={count} setCount={setCount}></Count>
        <Count2 count={count2} setCount={increment}></Count2>
      </div>
    </>
  )
}