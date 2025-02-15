import Counter from "./Counter";
import HoverCounter from "./HoverCounter";
import ThemeContext from "../contexts/themeContext";

export default function Content() {
    return (
        <>
            <h1>This is content component</h1>
            <Counter>
                {(count, incrementCount) => (
                    <ThemeContext.Consumer>
                        {({ theme, switchTheme }) => (
                            <HoverCounter
                                count={count}
                                incrementCount={incrementCount}
                                theme={theme}
                                switchTheme={switchTheme}
                            />
                        )}
                    </ThemeContext.Consumer>
                )}
            </Counter>
        </>
    );
}
