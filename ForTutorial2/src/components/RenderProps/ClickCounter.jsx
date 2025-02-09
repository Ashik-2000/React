import React from "react";

export default class ClickCounter extends React.Component {
    state = {
        count: 0,
    };
    incrementCount = () => {
        this.setState((state) => ({ count: state.count + 1 }));
    };
    render() {
        const { count } = this.state;
        return (
            <>
                <button onClick={this.incrementCount}>Click {count} times</button>
            </>
        );
    }
}
