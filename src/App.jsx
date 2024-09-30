
import './App.css';
import { WapperList } from './components/WrapperList';
import { Button } from './components/Button';

  function App ( ){
    const buttonText ="count :";
    return (
    <>
        <h1> Contador incrementa de 5 en 5 </h1>
        <Button text= {buttonText}/>
    </>
    );
  }
  export default App;