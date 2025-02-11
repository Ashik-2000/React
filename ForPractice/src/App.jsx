import Counter from "./components/Counter";
import ClickCounter from "./components/ClickCounter";

function App() {
    return (
        <>
            <Counter
                render={(count, incrementCount) => (
                    <ClickCounter
                        count={count}
                        incrementCount={incrementCount}
                    />
                )}
            />
        </>
    );
}

export default App;
