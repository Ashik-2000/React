import { useImperativeHandle, useRef } from "react";

export default function MyInput({ ref }) {
    const realInputRef = useRef(null);
    useImperativeHandle(ref, () => ({
        focus() {
            realInputRef.current.focus();
        },
    }));

    return (
        <>
            <input ref={realInputRef} />
        </>
    );
}
