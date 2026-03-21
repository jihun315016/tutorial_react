import { Dispatch, SetStateAction } from "react";

export default function Count({
    count, setCount
}: { count: number, setCount: Dispatch<SetStateAction<number>>; }) {
    
    return(
        <>
            <h1>count: {count}</h1>
            <button onClick={() => setCount((count) => count + 1)}>INCREMENT</button>
        </>
    )
}