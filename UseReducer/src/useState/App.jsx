import { useState } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

const initialTasks = [
    { id: 1, text: "Going to gym", status: false },
    { id: 2, text: "Doing Homework", status: false },
    { id: 3, text: "Night Football", status: true },
    { id: 4, text: "Out for Dinner", status: false },
];

export default function App() {
    const [tasks, setTasks] = useState(initialTasks);

    function getID(data) {
        const maxID = data.reduce(
            (prev, current) => (prev && prev > current.id ? prev : current.id),
            0
        );
        return maxID + 1;
    }

    const handleAddTask = (text) => {
        setTasks([
            ...tasks,
            {
                id: getID(tasks),
                text: text,
                status: false,
            },
        ]);
    };

    const handleEditTask = (editTask) => {
        const newTask = tasks.map((task) => {
            if (task.id === editTask.id) {
                return editTask;
            } else {
                return task;
            }
        });
        setTasks(newTask);
    };

    const handleDelete = (taskID) => {
        const newTasks = tasks.filter((task) => task.id !== taskID);
        setTasks(newTasks);
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
