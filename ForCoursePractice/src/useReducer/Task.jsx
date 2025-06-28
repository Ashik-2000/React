import { useContext, useState } from "react";
import { DistaptchContext } from "./Contexts";

export default function Task({ task }) {
    const [isEditing, setIsEditing] = useState(false);
    const dispatch = useContext(DistaptchContext);
    let taskItem;
    if (isEditing) {
        taskItem = (
            <>
                <input
                    value={task.text}
                    onChange={(e) => {
                        dispatch({
                            type: "changed",
                            task: {
                                ...task,
                                text: e.target.value,
                            },
                        });
                    }}
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
                        onChange={(e) => {
                            dispatch({
                                type: "changed",
                                task: {
                                    ...task,
                                    done: e.target.checked,
                                },
                            });
                        }}
                    />
                    {taskItem}
                    <button
                        onClick={() => {
                            dispatch({
                                type: "delete",
                                id: task.id,
                            });
                        }}
                    >
                        Delete
                    </button>
                </label>
            </li>
        </>
    );
}
