function HoverCounter({ count, incrementCount, theme }) {
    return (
        <>
            <h1 onMouseOver={incrementCount}>
                Hovered {count} times and theme is {theme}
            </h1>
        </>
    );
}

export default HoverCounter;
