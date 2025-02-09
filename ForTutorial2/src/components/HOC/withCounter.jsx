import React from "react";

const withCounter = (originalComponent) => {
    class NewComponent extends React.Component {
        state = { count: 0 };
        incrementCount = () => {
            this.setState((state) => ({
                count: state.count + 1,
            }));
        };
        render() {
            const { count } = this.state;
            let Component = originalComponent;
            return (
                <Component
                    count={count}
                    incrementCount={this.incrementCount}
                />
            );
        }
    }
    return NewComponent;
};

export default withCounter;
