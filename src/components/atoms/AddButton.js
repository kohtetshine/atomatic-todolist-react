import React from 'react';

const AddButton = ({ onClick }) => (
    <button
        onClick={onClick}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
        Add
    </button>
);

export default AddButton;