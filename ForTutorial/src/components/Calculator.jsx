import React from "react";
import TemperatureInput from "./TemleratureInput";
import { convert, toCelsius, toFahrenheit } from "../lib/converter";
import BoillongVerdict from "./BoillingVerdict";

export default class Calculator extends React.Component {
    state = { temperature: "", scale: "" };
    handleChange = (event, scale) => {
        this.setState({
            temperature: event.target.value,
            scale,
        });
    };
    render() {
        const { temperature, scale } = this.state;
        const celsius =
            scale === "f" ? convert(temperature, toCelsius) : temperature;
        const fahrenheit =
            scale === "c" ? convert(temperature, toFahrenheit) : temperature;
        return (
            <>
                <TemperatureInput
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.handleChange}
                />
                <TemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleChange}
                />
                <BoillongVerdict celsius={parseFloat(temperature)} />
            </>
        );
    }
}
