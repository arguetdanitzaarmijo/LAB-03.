import './App.css';
import { Button } from './component/Button';
import CompWithProps from './component/CompWithProps';

function App ( ){
  
  const buttonText ="count :";
  return (
    <>
        <h1> HOLA DESDE VITE  </h1>
        <Button text= {buttonText}/>
          <CompWithProps />
    </>
    );
  }
  export default App;