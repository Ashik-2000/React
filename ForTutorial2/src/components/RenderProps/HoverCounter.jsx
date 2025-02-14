function HoverCounter({ count, incrementCount }) {
    return (
        <>
            <h1 onMouseOver={incrementCount}>Hovered {count} times</h1>
        </>
    );
}

export default HoverCounter;
