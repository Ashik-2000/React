import { useState } from "react";
import MyComponent from "./components/ClassComponent";
import MyFunctionComponent from "./components/FunctionalComponent";

export default function App() {
    const [show, setShow] = useState(true);
    return (
        <div className="app">
            {/* <MyComponent /> */}
            <div>
                {show && <MyFunctionComponent />}
            </div>
            <button
                type="button"
                onClick={() => setShow((prevSho) => !prevSho)}
            >
                {show ? "Hide" : "Show"}
            </button>
        </div>
    );
}
