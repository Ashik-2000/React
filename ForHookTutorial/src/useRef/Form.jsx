// Commnet out one of the input to see the result properly.

import { useRef, useEffect } from "react";
import Input from "./Input";

export default function Form() {
    const inputRef = useRef();
    useEffect(() => {
        inputRef.current.focus();
    }, []);
    return (
        <>
            {/* For jsx element */}
            <input ref={inputRef} type="text" placeholder="for useRef()..." />
            <br />
            <br />
            {/* For imported commponent */}
            <Input
                ref={inputRef}
                type="text"
                placeholder="for forwardRef()..."
            />
        </>
    );
}
