import { useEffect, useRef } from "react";

export default function Form() {
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    }, []);
    return (
        <>
            <p>
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Enter something"
                />
            </p>
        </>
    );
}
