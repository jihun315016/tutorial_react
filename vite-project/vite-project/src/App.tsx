import { useReducer } from 'react';
import { counterReducer } from './reducer/counterReducer';

export default function App() {
  const [count, countDispatch] = useReducer(counterReducer, 0);

  return (
    <>
      <div>
        <p>{count}</p>
        <button onClick={() => countDispatch({ type: 'INCREMENT' })}>INCREMENT</button>
        <button onClick={() => countDispatch({ type: 'DECREMENT' })}>DECREMENT</button>
        <button onClick={() => countDispatch({ type: 'RESET' })}>RESET</button>
        <button onClick={() => countDispatch({ type: '' })}>ERROR</button>
      </div>
    </>
  )
}