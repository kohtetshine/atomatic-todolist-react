import React from 'react';

const InputField = ({ value, onChange, placeholder }) => (
    <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
);

export default InputField;