import React from "react";


class App extends React.Component{
  render() {
    return (
      <>
        <h1>
          <span>Hello {new Date().toLocaleTimeString(this.props.en)}</span>
        </h1>
      </>
    );
  }
}

export default App;