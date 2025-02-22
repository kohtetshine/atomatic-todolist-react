import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import TodoList from '../src/components/pages/TodoList';
import '@testing-library/jest-dom';
import { JSDOM } from 'jsdom';

const dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`);
global.document = dom.window.document;
global.window = dom.window;

describe('TodoList component', () => {
    it('adds new task when user clicks "Add" button', async () => {
        const { getByText, getByPlaceholderText } = render(<TodoList />);
        const inputField = getByPlaceholderText('Add new task...');
        const addButton = getByText('Add');

        fireEvent.change(inputField, { target: { value: 'New task' } });
        fireEvent.click(addButton);

        await waitFor(() => expect(getByText('New task')).toBeInTheDocument());
    });

    it('toggles task completion when user clicks on task', async () => {
        const { getByText } = render(<TodoList />);
        const task = getByText('Task 1');

        fireEvent.click(task);

        await waitFor(() => expect(task).toHaveClass('completed'));
    });

    it('deletes task when user clicks "Delete" button', async () => {
        const { getByText, queryByText } = render(<TodoList />);
        const task = getByText('Task 1');
        const deleteButton = getByText('Delete');

        fireEvent.click(deleteButton);

        await waitFor(() => expect(queryByText('Task 1')).not.toBeInTheDocument());
    });
});