import { useState } from "react";

export default function () {
    const [count, setCounter] = useState(0);
    const handleClick = () => {
        setCounter((prevState) => { // accesing the previous state is similar to the class component.
            console.dir(prevState);
            return prevState + 1
        });
    };
    return (
        <>
            <p>{count}</p>
            <button type="button" onClick={handleClick}>Click Here</button>
        </>
    );
}
