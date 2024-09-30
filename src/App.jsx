
import './App.css';
import { WapperList } from './components/WrapperList';
import { Button } from './components/Button';

  function App ( ){
    const buttonText ="count :";
    return (
    <>
        <h1> Numero Aleatorio</h1>
        <Button text= {buttonText}/>
    </>
    );
  }
  export default App;