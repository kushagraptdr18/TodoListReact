import React from 'react'

const ShowTask = ({ task, onRemoveTask, onCompleteTask }) => {
    return (
      <div className='EachTask'>
        <div
          className={`cir ${task.completed ? 'completed' : ''}`}
          onClick={() => onCompleteTask(task.id)}
        ></div>
        <h1 className={task.completed ? 'line-through' : ''}>{task.text}</h1>
        <button className='remove-btn' onClick={() => onRemoveTask(task.id)}>
          Remove
        </button>
      </div>
    );
  };

export default ShowTask
