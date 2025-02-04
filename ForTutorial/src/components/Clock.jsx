import React from "react";
import Button from "./button"

class Clock extends React.Component {
    state = { date: new Date(), locale: "bn-BD" };
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
    handleClick = (locale) => {
        this.setState({ locale})
    }
    render() {
        console.log('Clock Rendering')
        const { date, locale } = this.state;
        return (
            <>
                <h1>Time: {date.toLocaleTimeString(locale)}</h1>
                <Button change={this.handleClick} locale='en-US'/>
            </>
        );
    }
}

export default Clock;
