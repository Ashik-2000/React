import React from "react";
import { useReducer } from "react";
import ComponentA from "./useReduce/ComponentA";

export const counterContext = React.createContext();

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
function App() {
    const [count, dispatch] = useReducer(reducer, initialValue);
    return (
        <>
            <h1>Count: {count}</h1>
            <counterContext.Provider value={{dispatch: dispatch}}>
                <ComponentA />
            </counterContext.Provider>
        </>
    );
}

export default App;
