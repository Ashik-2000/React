import React from "react";

function ShowCount({ count, title }) {
    console.log(`Rendering ${title}....`);
    return (
        <>
            {title} is: {count}
        </>
    );
}

export default React.memo(ShowCount);
