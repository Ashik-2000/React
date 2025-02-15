function HoverCounter({ count, incrementCount, theme, switchTheme }) {
    const style =
        theme === "dark" ? { backgroundColor: "#000", color: "#fff" } : null;
    return (
        <>
            <h1 onMouseOver={incrementCount} style={style}>
                Hovered {count} times and theme is {theme}
            </h1>
            <button type="button" onClick={switchTheme}>
                Change Theme
            </button>
        </>
    );
}

export default HoverCounter;
