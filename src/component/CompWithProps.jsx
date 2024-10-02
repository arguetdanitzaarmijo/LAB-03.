import { useState } from 'react';

const CompWithProps = () => {
const [inputText, setInputText] = useState('');


const handleInputChange = (e) => {
    setInputText(e.target.value);
    };

    return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
    <label htmlFor="inputField">Escribe algo:</label>
        <input
        id="inputField"
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Escribe aquí"
        style={{ marginLeft: '10px', padding: '5px', fontSize: '16px' }}
        />
    <p style={{ marginTop: '20px' }}>Lo que escribiste: {inputText}</p>
    </div>
    );
};

export default CompWithProps;
