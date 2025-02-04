import React from 'react';

class Button extends React.Component {
    shouldComponentUpdate(nextProps) {
        const { change:currentProp } = this.props
        const { change: nextProp } = nextProps
        if (currentProp === nextProp) {
            return false;
        }
        return true;
    }
    render() {
        console.log('Button Rendering')
        const { change, locale } = this.props;
        console.log(change)
        console.log(locale)
        return (
            <button onClick={() => change(locale)}>Click here</button>
        )
    }
}

export default Button