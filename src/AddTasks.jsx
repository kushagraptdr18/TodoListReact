import React,{useState} from 'react'


const AddTasks = ({ onAddTask }) => {
    const [task, setTask] = useState('');
  
    const handleAddTask = () => {
      if (task.trim() !== '') {
        onAddTask(task);
        setTask('');
      }
    };
  
    return (
      <div className='Add'>
        <h1>To-Do-List</h1>
        <div className='com'>
          <input
            type='text'
            placeholder='Write your task here'
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button onClick={handleAddTask}>Add Task</button>
        </div>
      </div>
    );
  };

export default AddTasks
