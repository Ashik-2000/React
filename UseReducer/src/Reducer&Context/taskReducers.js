function taskReducer(tasks, action) {
    switch (action.type) {
        case "add": {
            return [
                ...tasks,
                {
                    id: action.id,
                    text: action.text,
                    status: false,
                },
            ];
        }
        case "change": {
            return tasks.map((task) => {
                if (task.id === action.task.id) {
                    return action.task;
                } else {
                    return task;
                }
            });
        }
        case "delete": {
            return tasks.filter((task) => task.id !== action.id);
        }
        default:
            throw new Error(`The action: ${action.type} is not defined.`);
    }
}

export default taskReducer;
