import React from "react";
function withHOC(mainComponent) {
    class NewComponent extends React.Component {
        state = {
            count: 0,
        };
        incrementCount = () => {
            this.setState((prevState) => ({ count: prevState.count + 1 }));
        };
        render() {
            const { count } = this.state;
            let Component = mainComponent;
            return (
                <>
                    <Component
                        count={count}
                        incrementCount={this.incrementCount}
                    />
                </>
            );
        }
    }
    return NewComponent;
}

export default withHOC;
