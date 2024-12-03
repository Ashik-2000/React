import React from "react";

class Clock extends React.Component {
    state = { date: new Date(), local: 'bn-BD' }

    componentDidMount() {
        this.clockTimer = setInterval(() => {
            this.setState({ date: new Date() })
        }, 1000);
    }

    // If we go to other pages then this function will be called and it would stop the interval while we are away. When we come back then the 'componentDidMount()' will be called again.
    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    handleClick = () => { 
        this.setState({local: 'en-US'});
    }

    render() {
        const {date, local} = this.state;
        return (
            <div>
                <h1>
                    <span>
                        {/* {this.state.date.toLocaleTimeString(this.props.locale)} */}
                        {date.toLocaleTimeString(local)}
                    </span>
                </h1>
                <button onClick={this.handleClick}>Click Here</button>
            </div>
        )
    }
}

export default Clock;