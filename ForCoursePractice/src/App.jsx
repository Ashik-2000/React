import { useRef, useState } from "react";

export default function App() {
    const [starTime, setStartTime] = useState(null);
    const [nowTime, setNowTime] = useState(null);
    let intervalRef = useRef(null);

    const handleStartWatch = () => {
        if (intervalRef.current) {
            return;
        }
        setStartTime(Date.now());
        setNowTime(Date.now());

        intervalRef.current = setInterval(() => {
            setNowTime(Date.now());
        }, 10);
    };

    const handleStopWatch = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    };

    let timePassed = 0;
    if (starTime != null && nowTime != null) {
        timePassed = (nowTime - starTime) / 1000;
    }

    return (
        <>
            <h1>Time passed: {timePassed.toFixed(3)}</h1>
            <button onClick={handleStartWatch}>Start</button>
            <button onClick={handleStopWatch}>Stop</button>
        </>
    );
}
