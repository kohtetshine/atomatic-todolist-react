import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TaskList from '../src/components/organisms/TaskList';
import '@testing-library/jest-dom';
import { JSDOM } from 'jsdom';

const dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`);
global.document = dom.window.document;
global.window = dom.window;

describe('TaskList component', () => {
    it('renders task list with correct tasks', () => {
        const tasks = [
            { id: 1, text: 'Task 1', completed: false },
            { id: 2, text: 'Task 2', completed: true },
        ];
        const { getByText } = render(<TaskList tasks={tasks} />);
        expect(getByText('Task 1')).toBeInTheDocument();
        expect(getByText('Task 2')).toBeInTheDocument();
    });

    it('calls toggleTask prop when task is clicked', () => {
        const tasks = [
            { id: 1, text: 'Task 1', completed: false },
        ];
        const toggleTask = jest.fn();
        const { getByText } = render(<TaskList tasks={tasks} toggleTask={toggleTask} />);
        const task = getByText('Task 1');
        fireEvent.click(task);
        expect(toggleTask).toHaveBeenCalledTimes(1);
        expect(toggleTask).toHaveBeenCalledWith(1);
    });

    it('calls deleteTask prop when delete button is clicked', () => {
        const tasks = [
            { id: 1, text: 'Task 1', completed: false },
        ];
        const deleteTask = jest.fn();
        const { getByText } = render(<TaskList tasks={tasks} deleteTask={deleteTask} />);
        const deleteButton = getByText('Delete');
        fireEvent.click(deleteButton);
        expect(deleteTask).toHaveBeenCalledTimes(1);
        expect(deleteTask).toHaveBeenCalledWith(1);
    });
});