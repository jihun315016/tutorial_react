import { Dispatch, SetStateAction } from "react";

export default function Count2({
    count, setCount
}: { count: number, setCount: () => void; }) {
    
    return(
        <>
            <h1>count: {count}</h1>
            <button onClick={setCount}>INCREMENT</button>
        </>
    )
}