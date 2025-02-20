import { useState, useCallback, useMemo } from "react";
import Title from "./useCallback_memo/Title";
import ShowCount from "./useCallback_memo/ShowCount";
import Button from "./useCallback_memo/Button";

function App() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const incrementByOne = useCallback(() => {
        setCount1((count) => count + 1);
    }, []); // useCallback() stores the isntance the function so that it prevents unnecessary instance changes thus re-render
    const incrementByFive = useCallback(() => {
        setCount2((count) => count + 5);
    }, []); // useCallback() stores the isntance the function so that it prevents unnecessary instance changes thus re-render
    const isEvenOrOdd = useMemo(() => {
        let i = 0;
        while (i < 1000000000) i += 1;
        return count1 % 2 === 0;
    }, [count1]); // useMemo() returnes the return value of the inside function so that the function would stop unnecessary call if the return value stay unchanged.
    return (
        <>
            <Title />
            <ShowCount count={count1} title="count 1 " />
            <br />
            <span>{isEvenOrOdd ? "Even" : "Odd"}</span>
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
