import React from "react";
import TemperatureInput from "./TemleratureInput";

export default class Calculator extends React.Component {
    render() {
        return (
            <>
                <TemperatureInput scale='c'/>
                <TemperatureInput scale='f'/> 
                {/* <BoillingVerdict celsius={parseFloat(temperature)} /> */}
            </>
        );
    }
}
