import ClickCounter from "./components/RenderProps/ClickCounter";
import HoverCounter from "./components/RenderProps/HoverCounter";
import Counter from "./components/RenderProps/Counter";

export default function App() {
    return (
        <>
            <Counter
                render={(count, incrementCount) => (
                    <HoverCounter
                        count={count}
                        incrementCount={incrementCount}
                    />
                )}
            />
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
