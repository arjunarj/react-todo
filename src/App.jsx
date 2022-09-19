import { useState } from "react"
import AddTask from "./components/AddTask"
import Header from "./components/Header"
import Tasks from "./components/Tasks"


function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Evening Turf',
        day: 'Today',
        reminder: true,
    },
    {
        id: 2,
        text: 'Board Meeting',
        day: 'Tomorrow',
        reminder: true,
    },
    {
        id: 3,
        text: 'Movie night',
        day: 'Yesterday',
        reminder: false,
    }
]) 
  //Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random * 10000)+1
    const newTask = {id, ...task}
    setTasks([...tasks,newTask ])
  }
  //Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task)=> 
      task.id === id 
      ? {...task, reminder: !task.reminder}
      :task)
    )
  }

  return (
    <div className="container">
      {/* props, like passing argument to function */}
      <Header /> 
      <AddTask onAdd={addTask}/>
      {tasks.length >0 ? 
      <Tasks 
        tasks={tasks} 
        onDelete={deleteTask} 
        onToggle={toggleReminder}/>
      : 'No tasks added'}
    </div>
  )
}

export default App
