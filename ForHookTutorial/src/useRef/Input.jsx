import React from "react";

function input({ type, placeholder }, ref) {
    return (
        <>
            <input ref={ref} type={type} placeholder={placeholder} />
        </>
    );
}

export default React.forwardRef(input);
