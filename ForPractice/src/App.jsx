import { useReducer } from "react";
import React from "react";
import ComponentA from "./components/ComponentA";

export const counterContext = React.createContext();

const initialState = 0;
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

export default function App() {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div className="app">
            <h1>Count: {count}</h1>
            <counterContext.Provider value={{ dispatch: dispatch }}>
                <ComponentA />
            </counterContext.Provider>
        </div>
    );
}
