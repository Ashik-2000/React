import { useState } from "react";

export default function AddTask({ onAdd }) {
    const [text, setText] = useState("");
    return (
        <>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button
                onClick={() => {
                    onAdd(text);
                    setText("");
                }}
            >
                Add
            </button>
        </>
    );
}
