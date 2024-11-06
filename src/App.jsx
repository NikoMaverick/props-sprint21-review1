import { useState } from 'react';
import Task from './components/Task';
import AddTaskForm from './components/AddTaskForm';
import './App.css'

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Llamar al médico', completed: true },
    { id: 3, text: 'Hacer ejercicio', completed: false }
  ]);

  const [maxId, setMaxId] = useState(tasks.length)

  const addTask = (text) => {
    const newTask = {
      id: maxId +1,
      text,
      completed: false
    }
    setTasks([...tasks, newTask])
    setMaxId(maxId + 1)
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const markAsCompleted = (id) => {
    setTasks(tasks.map(task => task.id === id ? {...task, completed: !task.completed } : task))
  }

  return (
    <>
    <AddTaskForm addTask={addTask} />
    <ul>
      {tasks.map(task => <Task 
      key={task.id}
      task={task}
      onDelete={deleteTask}
      onToggleMark={markAsCompleted}
      />)}
      
    </ul>
    </>
  );
};

export default App;
