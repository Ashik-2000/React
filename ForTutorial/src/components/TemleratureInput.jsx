import React from "react";

const scaleNames = {
    'c': 'celsius',
    'f': 'Fahrenheit',
}
export default class TemperatureInput extends React.Component {
    state = {
        temperature: "",
    };
    onTemperatureChange = (event) => {
        this.setState({
            temperature: event.target.value,
        });
    };
    render() {
        const { temperature } = this.state;
        const { scale } = this.props;
        return (
            <>
                <fieldset>
                    <legend>Enter temperature is { scaleNames[scale] }:</legend>
                    <input
                        type="text"
                        value={temperature}
                        onChange={this.onTemperatureChange}
                    />
                </fieldset>
            </>
        );
    }
}
