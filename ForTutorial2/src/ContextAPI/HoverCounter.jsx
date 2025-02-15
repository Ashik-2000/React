function HoverCounter({ count, incrementCount, theme }) {
    const style =
        theme === "dark" ? { backgroundColor: "#000", color: "#fff" } : null;
    return (
        <>
            <h1 onMouseOver={incrementCount} style={style}>
                Hovered {count} times and theme is {theme}
            </h1>
        </>
    );
}

export default HoverCounter;
