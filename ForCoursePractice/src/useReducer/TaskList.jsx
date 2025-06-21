import Task from "./Task";

export default function TaskList({ tasks, onDelete, onEditTask }) {
    return (
        <>
            <ul>
                {tasks.map((task) => (
                    <Task
                        key={task.id}
                        task={task}
                        onDelete={onDelete}
                        onEditTask={onEditTask}
                    />
                ))}
            </ul>
        </>
    );
}
