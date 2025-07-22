import { useReducer } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import taskReducer from "./taskReducers";

const initialTask = [
    { id: 1, text: "Goto Gym", status: false },
    { id: 2, text: "Have Dinner", status: false },
    { id: 3, text: "Play Football", status: true },
    { id: 4, text: "Read Book", status: false },
];

export default function App() {
    const [tasks, dispatch] = useReducer(taskReducer, initialTask);

    function getID(data) {
        const maxID = data.reduce(
            (prev, current) => (prev && prev > current.id ? prev : current.id),
            0
        );
        return maxID + 1;
    }

    const handleAddTask = (text) => {
        dispatch({
            type: "add",
            id: getID(tasks),
            text: text,
            status: false,
        });
    };

    const handleEditTask = (editTask) => {
        dispatch({
            type: "change",
            task: editTask,
        });
    };

    const handleDelete = (taskID) => {
        dispatch({
            type: "delete",
            id: taskID,
        });
    };

    return (
        <>
            <AddTask onAdd={handleAddTask} />
            <TaskList
                tasks={tasks}
                onDelete={handleDelete}
                onEdit={handleEditTask}
            />
        </>
    );
}
