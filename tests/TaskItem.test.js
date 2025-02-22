import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TaskItem from '../src/components/molecules/TaskItem';
import '@testing-library/jest-dom';
import { JSDOM } from 'jsdom';

const dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`);
global.document = dom.window.document;
global.window = dom.window;

describe('TaskItem component', () => {
    it('renders task item with correct text', () => {
        const task = { id: 1, text: 'Task 1', completed: false };
        const { getByText } = render(<TaskItem task={task} />);
        expect(getByText('Task 1')).toBeInTheDocument();
    });

    it('calls toggleTask prop when task is clicked', () => {
        const task = { id: 1, text: 'Task 1', completed: false };
        const toggleTask = jest.fn();
        const { getByText } = render(<TaskItem task={task} toggleTask={toggleTask} />);
        const taskItem = getByText('Task 1');
        fireEvent.click(taskItem);
        expect(toggleTask).toHaveBeenCalledTimes(1);
        expect(toggleTask).toHaveBeenCalledWith(1);
    });

    it('calls deleteTask prop when delete button is clicked', () => {
        const task = { id: 1, text: 'Task 1', completed: false };
        const deleteTask = jest.fn();
        const { getByText } = render(<TaskItem task={task} deleteTask={deleteTask} />);
        const deleteButton = getByText('Delete');
        fireEvent.click(deleteButton);
        expect(deleteTask).toHaveBeenCalledTimes(1);
        expect(deleteTask).toHaveBeenCalledWith(1);
    });
});