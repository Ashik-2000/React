import { useState, useEffect } from "react";

export default function FunctionalComponent() {
    const [count, setCount] = useState(0);
    const [time, setTime] = useState(new Date());
    const handleClick = () => {
        setCount((count) => count + 1);
    };
    const Tick = () => {
        setTime(new Date());
    };
    useEffect(() => {
        document.title = `Clicked ${count} times`;
    }, [count]); // Working as didComponentMount() + didComponentUpdate() method; 
    useEffect(() => {
        const interval = setInterval(() => {
            Tick();
        }, 1000);
        return () => clearInterval(interval);
    }, []); // Working as didComponentMount() + didComponentUnmount() method;
    return (
        <>
            <p>Time: {time.toLocaleTimeString()}</p>
            <button type="button" onClick={handleClick}>
                Click here
            </button>
        </>
    );
}
