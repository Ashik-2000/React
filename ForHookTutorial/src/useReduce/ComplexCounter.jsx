import { act, useReducer } from "react";

// state and actions are objects.
// As the state and actions are objects, now we can handle multiple states under one obeject.

const initialValue = {
    counter: 0,
    counter2: 0,
};
const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { ...state, counter: state.counter + action.value };
        case "decrement":
            return { ...state, counter: state.counter - action.value };
        case "increment2":
            return { ...state, counter2: state.counter2 + action.value };
        case "decrement2":
            return { ...state, counter2: state.counter2 - action.value };
        default:
            return state;
    }
};

export default function Counter() {
    const [count, dispatch] = useReducer(reducer, initialValue);
    return (
        <>
            <p>Complex Counter</p>
            <div>
                <h1>Count = {count.counter}</h1>
                <button
                    type="button"
                    onClick={() => dispatch({ type: "increment", value: 1 })}
                >
                    Increment by 1
                </button>
                <button
                    type="button"
                    onClick={() => dispatch({ type: "decrement", value: 1 })}
                >
                    Decrement by 1
                </button>
            </div>
            <div>
                <h1>Count = {count.counter2}</h1>
                <button
                    type="button"
                    onClick={() => dispatch({ type: "increment2", value: 1 })}
                >
                    Increment by 1
                </button>
                <button
                    type="button"
                    onClick={() => dispatch({ type: "decrement2", value: 1 })}
                >
                    Decrement by 1
                </button>
            </div>
        </>
    );
}
