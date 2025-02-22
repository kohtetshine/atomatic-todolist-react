import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AddButton from '../src/components/atoms/AddButton';
import { JSDOM } from 'jsdom';
import '@testing-library/jest-dom';

const dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`);
global.document = dom.window.document;
global.window = dom.window;

describe('AddButton component', () => {
    it('renders with correct label', () => {
        const { getByText } = render(<AddButton />);
        expect(getByText('Add')).toBeInTheDocument();
    });

    it('calls onClick prop when clicked', () => {
        const onClick = jest.fn();
        const { getByText } = render(<AddButton onClick={onClick} />);
        const addButton = getByText('Add');
        fireEvent.click(addButton);
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('has correct className', () => {
        const { getByText } = render(<AddButton />);
        const addButton = getByText('Add');
        expect(addButton).toHaveClass('button add-button');
    });
});