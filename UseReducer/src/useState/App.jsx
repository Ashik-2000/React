import { useState } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

const initialTask = [
    { id: 1, text: "Goto Gym", status: false },
    { id: 2, text: "Have Dinner", status: false },
    { id: 3, text: "Play Football", status: true },
    { id: 4, text: "Read Book", status: false },
];

export default function App() {
    const [tasks, setTasks] = useState(initialTask);

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
        const newTasks = tasks.filter((task) => task.id !== taskID);
        setTasks(newTasks);
    };

    console.log(initialTask);
    console.log(tasks);

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
