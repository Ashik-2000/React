export default function Panel({ title, children, isShow, onShow }) {
    return (
        <section className="panel">
            <h3>{title}</h3>
            {isShow ? (
                <p>{children}</p>
            ) : (
            <button onClick={onShow}>Show</button>
            )}
        </section>
    );
}
