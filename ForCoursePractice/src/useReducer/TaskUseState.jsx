// Import this in Main.jsx

import { useState } from "react";
import AddTask from "./AddTask.jsx";
import TaskList from "./TaskList.jsx";

const initialTasks = [
    { id: 0, text: "Visit Kafka Museum", done: false },
    { id: 1, text: "Watch a puppet show", done: false },
    { id: 2, text: "Lennon Wall pic", done: false },
];

export default function TaskUseState() {
    const [tasks, setTasks] = useState(initialTasks);

    const getNextId = (data) => {
        const maxId = data.reduce(
            (prev, current) => (prev && prev > current.id ? prev : current.id),
            0
        );

        return maxId + 1;
    };

    const handleAddTask = (text) => {
        setTasks([
            ...tasks,
            {
                id: getNextId(tasks),
                text: text,
                done: false,
            },
        ]);
    };

    const handleEditTask = (editTask) => {
        const newTasks = tasks.map((task) => {
            if (task.id === editTask.id) {
                return editTask;
            } else {
                return task;
            }
        });
        setTasks(newTasks);
    };

    const handleDelete = (taskID) => {
        setTasks(tasks.filter((task) => task.id !== taskID));
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
