
import { useState } from "react"


const AddTaskForm = ({ addTask }) => {
    const [text, setText] = useState('')

    const hanndleSubmit = (e) => {
        e.preventDefault()
        addTask(text)
        setText('')
    }
    return(
        <>
        <form onSubmit={hanndleSubmit}>
            <input 
            type="text"
            placeholder="Añade tarea"
            value={text}
            onChange={(e) => setText(e.target.value)} 
            />
            <button type="submit">Nueva tarea</button>

        </form>
        </>
    )
}

export default AddTaskForm