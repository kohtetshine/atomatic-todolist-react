import React from 'react';
import TaskItem from '../molecules/TaskItem';

const TaskList = ({ tasks, toggleTask, deleteTask }) => (
    <div className="task-list">
        {tasks.map((task) => (
            <TaskItem id={task.id} key={task.id} task={task} toggleTask={toggleTask} deleteTask={deleteTask} />
        ))}
    </div>
);

export default TaskList;
