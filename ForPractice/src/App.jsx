import Counter from "./components/Counter";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";

function App() {
    return (
        <>
            <Counter>
                {(count, incrementCount) => (
                    <ClickCounter
                        count={count}
                        incrementCount={incrementCount}
                    />
                )}
            </Counter>
            <Counter>
                {(count, incrementCount) => (
                    <HoverCounter
                        count={count}
                        incrementCount={incrementCount}
                    />
                )}
            </Counter>
        </>
    );
}

export default App;
