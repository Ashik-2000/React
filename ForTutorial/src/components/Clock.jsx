import React from "react";

class App extends React.Component {
    state = { date: new Date() };
    componentDidMount() {
        this.clockTimer = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }
    tick() {
        this.setState(
            { date: new Date() }
        )
    }
    render() {
        return (
            <>
                <h1>Time: {this.state.date.toLocaleTimeString(this.props.en)}</h1>
            </>
        );
    }
}

export default App;
