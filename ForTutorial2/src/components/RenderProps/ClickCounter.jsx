export default function ClickCounter({ count, incrementCount }) {
    return (
        <>
            <button onClick={incrementCount}>Click {count} times</button>
        </>
    );
}
