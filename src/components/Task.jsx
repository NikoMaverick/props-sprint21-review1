const Task = ({ task, onDelete, onToggleMark }) => {
    const handdleDete = () => {
        onDelete(task.id)
    }

    const handdleToggle =  () => {
        onToggleMark(task.id)
    }
    return (
        <>
            <li> 
                <span onClick={handdleToggle} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.text} 
                </span>
                <button onClick={handdleDete}> Eliminar</button>
            </li>
        </>
    )
}

export default Task