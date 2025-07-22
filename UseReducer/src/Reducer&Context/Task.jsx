import { useContext, useState } from "react";
import { dispatchContext } from "./contexts/contexts";

export default function Task({ task }) {
    const [edit, setEdit] = useState(false);

    const dispatch = useContext(dispatchContext);

    let taskItem;
    
    if (edit) {
        taskItem = (
            <>
                <input
                    type="text"
                    value={task.text}
                    onChange={(e) =>
                        dispatch({
                            type: "change",
                            task: {
                                ...task,
                                text: e.target.value,
                            },
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
                        dispatch({
                            type: "change",
                            task: {
                                ...task,
                                status: e.target.checked,
                            },
                        })
                    }
                />
                {taskItem}
                <button
                    onClick={() =>
                        dispatch({
                            type: "delete",
                            id: task.id,
                        })
                    }
                >
                    Delete
                </button>
            </li>
        </>
    );
}
