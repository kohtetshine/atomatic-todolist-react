import React from 'react';

const DeleteButton = ({ onClick, id }) => (
    <button
        onClick={onClick}
        className="button delete-button"
        data-testid={`delete-button-${id}`}
    >
        Delete
    </button>
);

export default DeleteButton;
