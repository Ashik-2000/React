import Counter from "./Counter";
import HoverCounter from "./HoverCounter";

export default function Content() {
    return (
        <>
            <h1>This is content component</h1>
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
