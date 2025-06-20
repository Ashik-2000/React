import { useState } from "react";
import Chat from "./Chat";
import ContactList from "./ContactList";

export default function Messenger() {
    const [to, setTo] = useState(contacts[0]);
    const [message, setMessage] = useState({ 0: "", 1: "", 3: "" });

    const handlChange = (contactId, text) => {
        setMessage((prev) => ({
            ...prev,
            [contactId]: text,
        }));
    };
    return (
        <div>
            <ContactList contacts={contacts} onSelect={setTo} />
            <Chat
                key={to.id}
                contact={to}
                message={message[to.id]}
                handleChange={handlChange}
            />
        </div>
    );
}

const contacts = [
    { id: 0, name: "Taylor", email: "taylor@mail.com" },
    { id: 1, name: "Alice", email: "alice@mail.com" },
    { id: 2, name: "Bob", email: "bob@mail.com" },
];
