import React from 'react';
import { CalculatorInput } from './features/calculatorInput/CalculatorInput';
import { Result } from './features/result/Result';
import { Spinner } from 'react-bootstrap';
import { NavBar } from './features/navbar/Navbar';
import './App.css';

function App() {
  const [modalShow, setModalShow] = React.useState(true);
  const [showSpinner, setShowSpinner] = React.useState(true);
  function calculate() {
    setModalShow(false);
    setTimeout(function () {
        setShowSpinner(false);
    }, 1000);
  }

  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
        <CalculatorInput show={modalShow} calculate={calculate}/> 
        {showSpinner ? 
          <Spinner animation="grow" /> :
          <Result />
        }
      </header>
    </div>
  );
}

export default App;
