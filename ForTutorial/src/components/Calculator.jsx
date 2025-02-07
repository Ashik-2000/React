import React from "react";
import BoillingVerdict from "./BoillingVerdict";

export default class Calculator extends React.Component {
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
        return (
            <>
                <fieldset>
                    <legend>Enter temperature is Celsius:</legend>
                    <input
                        type="text"
                        value={temperature}
                        onChange={this.onTemperatureChange}
                    />
                </fieldset>
                <BoillingVerdict celsius={parseFloat(temperature)} />
            </>
        );
    }
}
