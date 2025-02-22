import React from 'react';

const AddButton = ({ onClick }) => (
    <button onClick={onClick} className="button add-button" data-testid="addButton">
        Add
    </button>
);

export default AddButton;
