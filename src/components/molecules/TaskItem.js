import React from 'react';
import DeleteButton from '../atoms/DeleteButton';

const TaskItem = ({ task, toggleTask, deleteTask }) => (
    <div className="task-item">
        <span
            className={`task-text ${task.completed ? 'completed' : ''}`}
            onClick={() => toggleTask(task.id)}
        >
            {task.text}
        </span>
        <DeleteButton onClick={() => deleteTask(task.id)} />
    </div>
);

export default TaskItem;
