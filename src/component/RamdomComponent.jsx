import { useState } from 'react';

    const RandomComponent = () => {
    const [randomValue, setRandomValue] = useState(0);

    const handleRandomClick = () => {
    const newValue = Math.floor(Math.random() * 100) + 1;
    setRandomValue(newValue);
    };

    const handleResetClick = () => {
    setRandomValue(0);
    };

    const handleDecrementClick = () => {
    setRandomValue((prevValue) => Math.max(prevValue - 5, 0));
    };

return (
        <div>
        <p>Valor aleatorio: {randomValue}</p>
        <button  onClick={handleRandomClick}>Generar Valor</button>
        <button onClick={handleResetClick}>Reiniciar </button>
        <button onClick={handleDecrementClick}>Decrementar en 5</button>
        </div>
    );
};

export default RandomComponent;