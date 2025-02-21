import { useEffect, useRef, useState } from "react";

export default function Clock() {
    const [time, setTime] = useState(new Date());
    const timeRef = useRef(null);
    const Tick = () => setTime(new Date());
    useEffect(() => {
        timeRef.current = setInterval(Tick, 1000);
        return() => clearInterval(timeRef.current);
    }, []);
    return (
        <>
            <h2>Time: {time.toLocaleTimeString()}</h2>
            <button type="button" onClick={()=>clearInterval(timeRef.current)}>Stop</button>
        </>
    );
}
