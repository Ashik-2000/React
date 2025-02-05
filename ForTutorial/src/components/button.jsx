import React from 'react';

class Button extends React.Component {
    shouldComponentUpdate(nextProps) {
        const { change: currentProp, locale: currentState } = this.props
        const { change: nextProp, locale: nextState } = nextProps
        if (currentProp === nextProp && currentState === nextState) {
            return false;
        }
        return true;
    }
    render() {
        const { change, locale } = this.props;
        return (
            <>
                <button onClick={() => change(locale)}>Click here</button>
            </>
        )
    }
}

export default Button