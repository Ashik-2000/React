import Task from "./Task";

export default function TaskList({ tasks, onDelete, onEdit }) {
    return (
        <ul>
            {tasks.map((task) => (
                <Task
                    key={task.id}
                    task={task}
                    onDelete={onDelete}
                    onEdit={onEdit}
                />
            ))}
        </ul>
    );
}
