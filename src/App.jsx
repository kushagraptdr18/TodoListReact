import React,{useState} from 'react'
import AddTasks from './AddTasks'
import ShowTask from './ShowTask'

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (text) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: Date.now(), text, completed: false },
    ]);
  };

  const handleRemoveTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleCompleteTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className='TaskBox'>
      <AddTasks onAddTask={handleAddTask} />
      <div className='list'>
        {tasks.map((task) => (
          <ShowTask
            key={task.id}
            task={task}
            onRemoveTask={handleRemoveTask}
            onCompleteTask={handleCompleteTask}
          />
        ))}
      </div>
    </div>
  );
};


export default App
