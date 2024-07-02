import React, { useState } from 'react'

const ControlledInputs = () => {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    return <input type="text" value={inputValue} onChange={handleChange} />;
}

export default ControlledInputs
