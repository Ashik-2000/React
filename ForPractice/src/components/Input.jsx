import React from "react";

function Input({ input, placeholder }, ref) {
    return (
        <>
            <input ref={ref} type={input} placeholder={placeholder} />
        </>
    );
}

export default React.forwardRef(Input);
