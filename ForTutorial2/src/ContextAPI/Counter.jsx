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
        return this.props.children(count, this.incrementCount);
    }
}