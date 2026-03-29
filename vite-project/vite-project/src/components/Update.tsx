import { useEffect, useState } from "react"

export default function Update() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`Update: ${count}`)
    }, [count])
  
    // UnMount 동작 코드
    // return에 작성된 함수는 Mount에서는 동작하지 않음
    return (
        <>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount((count) => count + 1)}>count 증가</button>
        </>
    )
}