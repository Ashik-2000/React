import { useState } from "react";
import ShowCount from "./components/ShowCount";
import Button from "./components/Button";
import Title from "./components/Title";

export default function App() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const incrementByOne = () => {
        setCount1((count) => count + 1);
    };
    const incrementByFive = () => {
        setCount2((count) => count + 5);
    };
    return (
        <div className="app">
            <Title />
            <ShowCount count={count1} title="Count 1" />
            <br />
            <Button handleClick={incrementByOne}>Icrement by one</Button>
            <hr />
            <ShowCount count={count2} title="Count 2" />
            <br />
            <Button handleClick={incrementByFive}>Icrement by five</Button>
        </div>
    );
}
