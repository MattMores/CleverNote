import Task from './Task';

const Tasks = ( {tasks, onDelete, onToggle}) => {
    return (
        <>
        {tasks.map((task) => (
            <Task key={task.id} // or index and also pass in as prop
            task={task}
            onDelete={onDelete}
            onToggle={onToggle}
            />
        ))}
        </>
    )
}

export default Tasks
