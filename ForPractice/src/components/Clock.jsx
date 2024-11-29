import React from "react";

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()}
    }


    componentDidMount(){
        this.clockTimer = setInterval(() => this.setState({date: new Date()}), 1000);
    }

    // If we go to other pages then this function will be called and it would stop the interval while we are away. When we come back then the 'componentDidMount()' will be called again.
    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    render() {
        return (
            <h1>
                <span>
                    {/* {this.state.date.toLocaleTimeString(this.props.locale)} */}
                    {this.state.date.toLocaleTimeString()}
                </span> 
            </h1>
        )
    }
}

export default Clock;