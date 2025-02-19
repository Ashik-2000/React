import React from "react";

export default class ClassComponent extends React.Component {
    state = {
        count: 0,
        time: new Date(),
    };
    handleClick = () => {
        this.setState(({ count }) => ({ count: count + 1 }));
    };
    Tick = () => {
        this.setState({ time: new Date() });
    };
    componentDidMount() {
        const { count } = this.state;
        document.title = `Clicked ${count} times`;
        setInterval(this.Tick, 1000);
    }
    componentDidUpdate() {
        const { count } = this.state;
        document.title = `Clicked ${count} times`;
    }
    render() {
        const { time } = this.state;
        return (
            <>
                <p>Time: {time.toLocaleTimeString()}</p>
                <button type="button" onClick={this.handleClick}>
                    Click here
                </button>
            </>
        );
    }
}
