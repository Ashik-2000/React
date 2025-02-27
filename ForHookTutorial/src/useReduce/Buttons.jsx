import { useContext } from "react";
import { counterContext } from "../App";

export default function Buttons() {
    const countContext = useContext(counterContext);
    return (
        <>
            <button type="button" onClick={() => countContext.dispatch("increment")}>
                Increment by 1
            </button>
            <button type="button" onClick={() => countContext.dispatch("decrement")}>
                Decrement by 1
            </button>
        </>
    );
}
