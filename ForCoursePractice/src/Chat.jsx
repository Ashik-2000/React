export default function Chat({ contact, message, handleChange }) {
    return (
        <section className="chat">
            <textarea
                value={message}
                placeholder={"Chat to " + contact.name}
                onChange={(e) => handleChange(contact.id, e.target.value)}
            />
            <br />
            <button>Send to {contact.email}</button>
        </section>
    );
}
