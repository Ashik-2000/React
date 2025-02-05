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
        this.setState({ locale })
    }
    render() {
        const { date, locale } = this.state;
        return (
            <>
                <h1>Time: {date.toLocaleTimeString(locale)}</h1>
                {locale === 'bn-BD' ? <Button change={this.handleClick} locale='en-US' /> : <Button change={this.handleClick} locale='bn-BD' />}
            </>
        );
    }
}

export default Clock;


// handleClick = () => {
//     this.setState((prevState) => ({
//         locale: prevState.locale === "bn-BD" ? "en-US" : "bn-BD"
//     }));
// };
