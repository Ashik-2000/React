import React from "react";

function Title() {
    console.log('Rendering Title...');
    return (
        <>
            <h1>This is performance optimization.</h1>
        </>
    );
}

export default React.memo(Title); // React.memo is a Higher Order Component which does the same job as shouldComponentUpdate()