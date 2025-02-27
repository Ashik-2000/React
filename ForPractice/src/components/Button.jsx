import { counterContext } from "../App";
import { useContext } from "react";

function Button() {
    const countContext = useContext(counterContext);
    return (
        <>
            <button type="button" onClick={() => countContext.dispatch("increment")}>
                Increment
            </button>
            <button type="button" onClick={() => countContext.dispatch("decrement")}>
                Decrement
            </button>
        </>
    );
}

export default Button;
