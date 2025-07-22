import { useContext, useState } from "react";
import { dispatchContext, tasksContext } from "./contexts/contexts";

export default function AddTask() {
    const [text, setText] = useState("");
    const dispatch = useContext(dispatchContext);
    const tasks = useContext(tasksContext);

    function getID(data) {
        const maxID = data.reduce(
            (prev, current) => (prev && prev > current.id ? prev : current.id),
            0
        );
        return maxID + 1;
    }

    return (
        <>
            <input
                type="text"
                placeholder="add new task"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button
                onClick={() => {
                    dispatch({
                        type: "add",
                        id: getID(tasks),
                        text: text,
                    });
                }}
            >
                Add
            </button>
        </>
    );
}
