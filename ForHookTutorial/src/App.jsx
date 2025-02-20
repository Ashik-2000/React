import { useState } from "react";
import Title from "./useCallback_memo/Title";
import ShowCount from "./useCallback_memo/ShowCount";
import Button from "./useCallback_memo/Button";

function App() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const incrementByOne = () => {
        setCount1((count) => count + 1);
    };
    const incrementByFive = () => {
        setCount2((count) => count + 5);
    };
    return (
        <>
            <Title />
            <ShowCount count={count1} title="count 1 " />
            <br />
            <Button handleClick={incrementByOne}>Increment by One</Button>
            <hr />
            <ShowCount count={count2} title="count 5 " />
            <br />
            <Button handleClick={incrementByFive}>Increment by Five</Button>
        </>
    );
}

export default App;
