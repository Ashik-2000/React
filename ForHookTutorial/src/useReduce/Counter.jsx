import { useReducer } from "react";

// state and actions are primitive values.

const initialValue = 0;
const reducer = (state, action) => {
    switch (action) {
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        default:
            return state;
    }
};

export default function Counter() {
    const [count, dispatch] = useReducer(reducer, initialValue);
    return (
        <>
            <p>Simple Counter</p>
            <h1>Count = {count}</h1>
            <button type="button" onClick={() => dispatch("increment")}>
                Increment by 1
            </button>
            <button type="button" onClick={() => dispatch("decrement")}>
                Decrement by 1
            </button>
        </>
    );
}
