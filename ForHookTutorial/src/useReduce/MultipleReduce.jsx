import { useReducer } from "react";

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

export default function MultipleReduce() {
    const [count, dispatch] = useReducer(reducer, initialValue);
    const [count2, dispatch2] = useReducer(reducer, initialValue);
    return (
        <>
            <p>Multiple Reduce</p>
            <div>
                <h1>Count = {count}</h1>
                <button type="button" onClick={() => dispatch("increment")}>
                    Increment by 1
                </button>
                <button type="button" onClick={() => dispatch("decrement")}>
                    Decrement by 1
                </button>
            </div>
            <div>
                <h1>Count = {count2}</h1>
                <button type="button" onClick={() => dispatch2("increment")}>
                    Increment by 1
                </button>
                <button type="button" onClick={() => dispatch2("decrement")}>
                    Decrement by 1
                </button>
            </div>
        </>
    );
}
