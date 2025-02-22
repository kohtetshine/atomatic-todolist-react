import React from 'react';
import DeleteButton from '../atoms/DeleteButton';

const TaskItem = ({ task, toggleTask, deleteTask }) => (
    <div className="task-item" data-testid={`task-item-${task.id}`}>
        <span
            className={`task-text ${task.completed ? 'completed' : ''}`}
            onClick={() => toggleTask(task.id)}
            data-testid={`task-text-${task.id}`}
        >
            {task.text}
        </span>
        <DeleteButton
            onClick={() => deleteTask(task.id)}
            data-testid={`delete-button-${task.id}`}
        />
    </div>
);

export default TaskItem;
