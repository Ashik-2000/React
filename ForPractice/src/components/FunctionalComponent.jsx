import { useState, useEffect } from "react";

export default function MyFunctionComponent() {
    const [count, setCount] = useState(0);
    // const [date, setDate] = useState(new Date());
    // const Tick = () => {
    //     setDate(new Date());
    // };
    useEffect(() => {
        document.title = `Clicked ${count} times`;
    });
    const addClick = () => {
        setCount((count) => count + 1);
    };
    return (
        <>
            {/* <p>Time: {time.toLocaleTimeString()}</p> */}
            <button type="button" onClick={addClick}>
                Click Here
            </button>
        </>
    );
}
