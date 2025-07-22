import { useReducer } from "react";
import AddTask from "./AddTask";
import { dispatchContext, tasksContext } from "./contexts/contexts";
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

    console.log(initialTask);
    console.log(tasks);

    return (
        <>
            <tasksContext.Provider value={tasks}>
                <dispatchContext.Provider value={dispatch}>
                    <AddTask />
                    <TaskList tasks={tasks} />
                </dispatchContext.Provider>
            </tasksContext.Provider>
        </>
    );
}
