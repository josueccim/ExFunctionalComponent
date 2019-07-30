import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

//Elementos
const elemento = <div><h2>Josué celso cim</h2></div>  //JSX
const elemento2 = React.createElement('div', null, React.createElement('h2', null, 'Josue Celso Cim'))

const MostrarI = (props) => {
//function MostrarI(props) {
  return <p>{props.i}</p>
}

//Componente (functional component)
function App(props) {
  const [i, setI] = useState(1)
  
  const increment = () => {
    setI(i+1) 
  }

  return (
    <div className="App">
      <h1>Hello {props.name} {i} </h1>
      <br></br>
      <button onClick={increment}> Incrementar </button>
      <h2>Start editing to see some magic happen!</h2>
      {elemento}
      {elemento2}
      <MostrarI i={i}/>
    </div> 
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App name="Josue props" />, rootElement);
