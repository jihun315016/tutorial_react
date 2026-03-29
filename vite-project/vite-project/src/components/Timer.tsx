import { useEffect, useState } from "react";

export default function Timer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        // 1초마다 second를 1씩 증가
        const interval = setInterval(() => {
            setSeconds((seconds) => seconds + 1)
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return <p>timer: {seconds}</p>
}