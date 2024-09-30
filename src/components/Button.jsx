import  {useState} from "react";

    export const Button = (props) => {
        const { text } = props;
    
        const handleClick = () => {
        
        const randomValue = Math.floor(Math.random() * 100) + 1;
    
        
        alert(`Valor aleatorio: ${randomValue}`);
        };

    return (
        <button onClick={handleClick}>
            {text}
        </button>
    );
}