import React from 'react';

export default class Counter extends React.Component{
    state = {
        count: 0,
    };
    incrementCount = () => {
        this.setState((state) => ({ count: state.count + 1 }));
    };
    render() {
        const { count } = this.state;
        // const { render } = this.props;
        // return render(count, this.incrementCount);
        return this.props.children(count, this.incrementCount);
    }
}