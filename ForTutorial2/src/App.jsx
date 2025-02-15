// HOC
// import ClickCounter from "./components/HOC/ClickCounter";
// import HoverCounter from "./components/HOC/HoverCounter";

// Render Props
// import ClickCounter from "./components/RenderProps/ClickCounter";
// import HoverCounter from "./components/RenderProps/HoverCounter";
// import Counter from "./components/RenderProps/Counter";

// Context API
import React from "react";
import Section from "./ContextAPI/Section";
import ThemeContext from "./ContextAPI/contexts/themeContext";

export default class App extends React.Component {
    state = {
        theme: "dark",
    };
    render() {
        const { theme } = this.state;
        return (
            <>
                {/* HOC */}
                {/* <HoverCounter />
            <ClickCounter /> */}

                {/* Render Props first variant */}
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
                {/* Render Props second variant (it'll be used most) */}
                {/* <Counter>
                {(count, incrementCount) => (
                    <ClickCounter
                        count={count}
                        incrementCount={incrementCount}
                    />
                )}
            </Counter> */}

                {/* Context API */}
                <ThemeContext.Provider value={theme}>
                    <Section />
                </ThemeContext.Provider>
            </>
        );
    }
}
