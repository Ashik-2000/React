import React from "react";

function ShowCount({ count, title }) {
    console.log(`Rendering ${title}`);
    return (
        <>
            {title} is : {count}
        </>
    );
}
export default React.memo(ShowCount); // React.memo is a Higher Order Component which does the same job as shouldComponentUpdate()
