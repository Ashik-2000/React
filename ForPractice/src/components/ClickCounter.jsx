function ClickCounter({ count, incrementCount }) {
    return (
        <>
            <button onClick={incrementCount}>Clicked {count}</button>
        </>
    );
}

export default ClickCounter;
