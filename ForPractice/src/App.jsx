import React from "react";
import Counter from "./components/Counter";
import ClickCounter from "./components/ClickCounter";
import Section from "./components/Section";
import ThemeContext from "./contexts/themeContext";

class App extends React.Component {
    state = {
        theme: "dark",
    };
    render() {
        const { theme } = this.state;
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
                <ThemeContext.Provider value={{theme: theme}}>
                    <Section />
                </ThemeContext.Provider>
            </>
        );
    }
}

export default App;
