import React from "react";
import MyComponent from "./components/ClassComponent";
import MyFunctionComponent from "./components/FunctionalComponent";

export default class App extends React.Component {
    render() {
        return (
            <div className="app">
                {/* <MyComponent /> */}
                <MyFunctionComponent />
            </div>
        );
    }
}
