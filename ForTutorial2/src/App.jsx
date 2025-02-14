// HOC
// import ClickCounter from "./components/HOC/ClickCounter";
// import HoverCounter from "./components/HOC/HoverCounter";
// Render Props
import ClickCounter from "./components/RenderProps/ClickCounter";
import HoverCounter from "./components/RenderProps/HoverCounter";
import Counter from "./components/RenderProps/Counter";

export default function App() {
    return (
        <>
            {/* HOC */}
            {/* <HoverCounter />
            <ClickCounter /> */}
            {/* Render Props */}
            {/* <Counter
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
            /> */}
            {/* Render Props second variants */}
            <Counter>
                {(count, incrementCount) => (
                    <ClickCounter
                        count={count}
                        incrementCount={incrementCount}
                    />
                )}
            </Counter>
        </>
    );
}
