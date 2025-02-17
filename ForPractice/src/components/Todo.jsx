import { useState } from "react";

export default function Todo() {
    const [todo, setTodo] = useState("");
    const [warning, setWarning] = useState(null);
    const handleInput = (e) => {
        const inputValue = e.target.value;
        const warning = inputValue.includes(".js")
            ? "You need JavaScript skill to complete the task. Do you have it?"
            : null;
        setTodo(inputValue);
        setWarning(warning);
    };
    return (
        <>
            <p>From functional component</p>
            <p>{todo}</p>
            <p>
                <textarea name="todo" value={todo} onChange={handleInput} />
            </p>
            <hr />
            <h2>{warning || "Good choice!"}</h2>
        </>
    );
}
