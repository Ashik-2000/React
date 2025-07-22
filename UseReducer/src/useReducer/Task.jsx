import { useState } from "react";

export default function Task({ task, onDelete, onEdit }) {
    const [edit, setEdit] = useState(false);
    let taskItem;
    if (edit) {
        taskItem = (
            <>
                <input
                    type="text"
                    value={task.text}
                    onChange={(e) =>
                        onEdit({
                            ...task,
                            text: e.target.value,
                        })
                    }
                />
                <button onClick={() => setEdit((prev) => !prev)}>Save</button>
            </>
        );
    } else {
        taskItem = (
            <>
                {task.text}
                <button onClick={() => setEdit((prev) => !prev)}>Edit</button>
            </>
        );
    }
    return (
        <>
            <li>
                <input
                    type="checkbox"
                    checked={task.status}
                    onChange={(e) =>
                        onEdit({ ...task, status: e.target.checked })
                    }
                />
                {taskItem}
                <button onClick={() => onDelete(task.id)}>Delete</button>
            </li>
        </>
    );
}
