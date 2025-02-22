import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AddButton from '../src/components/atoms/AddButton';
import '@testing-library/jest-dom';
import { JSDOM } from 'jsdom';

const dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`);
global.document = dom.window.document;
global.window = dom.window;

describe('AddButton component', () => {
    it('renders with correct label', () => {
        const { getByTestId } = render(<AddButton />);
        expect(getByTestId('addButton')).toBeInTheDocument();
    });

    it('calls onClick prop when clicked', () => {
        const onClick = jest.fn();
        const { getByTestId } = render(<AddButton onClick={onClick} />);
        const addButton = getByTestId('addButton');
        fireEvent.click(addButton);
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('has correct className', () => {
        const { getByTestId } = render(<AddButton />);
        const addButton = getByTestId('addButton');
        expect(addButton).toHaveClass('button add-button');
    });
});
