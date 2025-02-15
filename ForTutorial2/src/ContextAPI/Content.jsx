import Counter from "./Counter";
import HoverCounter from "./HoverCounter";
import ThemeContext from "./contexts/themeContext";

export default function Content() {
    return (
        <>
            <h1>This is Content.</h1>
            <Counter>
                {(count, incrementCount) => (
                    <ThemeContext.Consumer>
                        {(value) => (
                            <HoverCounter
                                count={count}
                                incrementCount={incrementCount}
                                theme={value}
                            />
                        )}
                    </ThemeContext.Consumer>
                )}
            </Counter>
        </>
    );
}
