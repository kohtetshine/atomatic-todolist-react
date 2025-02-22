import React from 'react';

const InputField = ({ value, onChange, placeholder }) => (
    <input
        type="text"
        className="input-field"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
    />
);

export default InputField;