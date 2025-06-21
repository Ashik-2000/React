import { useState } from "react";

export default function Task({ task, onDelete, onEditTask }) {
    const [isEditing, setIsEditing] = useState(false);
    let taskItem;
    if (isEditing) {
        taskItem = (
            <>
                <input
                    value={task.text}
                    onChange={(e) =>
                        onEditTask({ ...task, text: e.target.value })
                    }
                />
                <button onClick={() => setIsEditing(!isEditing)}>Save</button>
            </>
        );
    } else {
        taskItem = (
            <>
                {task.text}
                <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
            </>
        );
    }
    return (
        <>
            <li>
                <label>
                    <input
                        type="checkbox"
                        checked={task.done}
                        onChange={(e) =>
                            onEditTask({
                                ...task,
                                done: e.target.checked,
                            })
                        }
                    />
                    {taskItem}
                    <button onClick={() => onDelete(task.id)}>Delete</button>
                </label>
            </li>
        </>
    );
}
