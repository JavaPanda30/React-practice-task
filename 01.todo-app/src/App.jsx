import  { useState } from 'react';
import TaskList from './Components/TaskList';
import "./App.css"
function App() {

  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (newTask !== '') {
      setTask([...task, newTask]);
      setNewTask('');
    }
  };
  const handleDeleteTask = (index) => {
    const updatedTasks = task.filter((_, i) => i !== index);
    setTask(updatedTasks);
  };

  const handleEditTask = (index, updatedTask) => {
    const updatedTasks = [...task];
    updatedTasks[index] = updatedTask;
    setTask(updatedTasks);
  };


  return (
    <>
    <h1>To-Do Task Planner </h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="inputTask">Add Task</label>
        <input
          type="text"
          id="inputTask"
          className="inputTask"
          placeholder="Add Task here"
          value={newTask}
          onChange={handleInputChange}
        />
        <button type="submit">Add</button>
      </form>
      <TaskList task={task} onDelete={handleDeleteTask}  onEdit = {handleEditTask}/>
    </>
  );
}

export default App;
