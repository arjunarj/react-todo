import Task from "./Task"


const Tasks = ({ tasks,onDelete,onToggle }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task 
            key={task.id} task={task} 
            /*Warning: Each child in a list should have a unique "key" prop.*/
        // so a key prop is used here

        
            onDelete={onDelete} 
            onToggle={onToggle}/> 
        
      ))}
    </>
  )
}

export default Tasks
