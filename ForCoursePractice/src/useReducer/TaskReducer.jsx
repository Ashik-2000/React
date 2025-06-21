// Import this in Main.jsx

import { useReducer } from "react";
import AddTask from "./AddTask.jsx";
import TaskList from "./TaskList.jsx";
import taskReducer from "./reducerFunction.js";

const initialTasks = [
    { id: 0, text: "Visit Kafka Museum", done: false },
    { id: 1, text: "Watch a puppet show", done: false },
    { id: 2, text: "Lennon Wall pic", done: false },
];

export default function TaskReducer() {
    const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

    const getNextId = (data) => {
        const maxId = data.reduce(
            (prev, current) => (prev && prev > current.id ? prev : current.id),
            0
        );

        return maxId + 1;
    };

    const handleAddTask = (text) => {
        dispatch({
            type: "added",
            id: getNextId(tasks),
            text: text,
        });
    };

    const handleEditTask = (editTask) => {
        dispatch({
            type: "changed",
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
            <h1>To Do List</h1>
            <AddTask onAdd={handleAddTask} />
            <TaskList
                tasks={tasks}
                onDelete={handleDelete}
                onEditTask={handleEditTask}
            />
        </>
    );
}
