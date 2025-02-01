import React from "react";

class App extends React.Component {
    render() {
        return (
            <>
                <span>Hello {new Date().toLocaleTimeString(this.props.en)}</span>
            </>
        );
    }
}

export default App;
