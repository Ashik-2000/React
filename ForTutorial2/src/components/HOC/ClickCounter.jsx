import withCounter from "./withCounter";

const ClickCounter = (props) => {
    const { count, incrementCount } = props;
    return (
        <>
            <button onClick={incrementCount}>Clicked {count} times</button>
        </>
    );
};

export default withCounter(ClickCounter);
