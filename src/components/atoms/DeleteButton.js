import React from 'react';

const DeleteButton = ({ onClick }) => (
    <button onClick={onClick} className="button delete-button">
        Delete
    </button>
);

export default DeleteButton;
