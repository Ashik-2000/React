import { useEffect, useState } from "react";

export default function Clock() {
    let timeRef = null;
    const [time, setTime] = useState(new Date());
    const Tick = () => setTime(new Date());
    useEffect(() => {
        timeRef = setInterval(Tick, 1000);
        return() => clearInterval(timeRef);
    }, []);
    return (
        <>
            <h2>Time: {time.toLocaleTimeString()}</h2>
            <button type="button" onClick={()=>clearInterval(timeRef)}>Stop</button>
        </>
    );
}
