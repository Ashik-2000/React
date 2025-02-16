import { useContext } from "react";
import Counter from "./Counter";
import HoverCounter from "./HoverCounter";
import ThemeContext from "../contexts/themeContext";

export default function Content() {
    const context = useContext(ThemeContext);
    const { theme, switchTheme } = context;
    return (
        <>
            <h1>This is content component</h1>
            <Counter>
                {(count, incrementCount) => (
                    <HoverCounter
                        count={count}
                        incrementCount={incrementCount}
                        theme={theme}
                        switchTheme={switchTheme}
                    />
                )}
            </Counter>
        </>
    );
}
