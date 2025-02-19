import { useState, useEffect } from "react";

export default function MyFunctionComponent() {
    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date());
    const Tick = () => {
        console.log("Click ticking");
        setDate(new Date());
    };
    useEffect(() => {
        console.log("Updating document title.");
        document.title = `Clicked ${count} times`;
    }, [count]);
    useEffect(() => {
        const interval = setInterval(() => {
            Tick();
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    const addClick = () => {
        setCount((count) => count + 1);
    };
    return (
        <>
            <p>Time: {date.toLocaleTimeString()}</p>
            <button type="button" onClick={addClick}>
                Click Here
            </button>
        </>
    );
}
