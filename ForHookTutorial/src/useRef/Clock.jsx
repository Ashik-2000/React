// Using off the useRef() as a storage so that we can use it on other perpouse.

import { useEffect, useRef, useState } from "react";

export default function Clock() {
    const [time, setTimer] = useState(new Date());
    const clockRef = useRef();
    const Tick = () => {
        setTimer(new Date());
    };
    useEffect(() => {
        clockRef.current = setInterval(Tick, 1000);
        return () =>  clearInterval(clockRef.current);
    }, []);
    return (
        <>
            <h2>Time: {time.toLocaleTimeString()}</h2>
            <button type="button" onClick={() => clearInterval(clockRef.current)}>Stop</button>
        </>
    );
}
