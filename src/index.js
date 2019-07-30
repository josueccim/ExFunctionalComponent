import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

//Componente (functional component)
function App(props) {
  //Entrada Rodando Fim
  const [estado, setEstado] = useState("ENTRADA");
  //Numero entre 0 e 150
  const [palpite, setPalpite] = useState(150);
  const [numPalpite, setNumPalpite] = useState(1);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const iniciarJogo = () => {
    setEstado("RODANDO");
    console.log("passou");
    setMin(0);
    setMax(300);
    setNumPalpite(0);
    setPalpite(150);
  };

  if (estado === "ENTRADA") {
    return <button onClick={iniciarJogo}>Começar a Jogar</button>;
  }

  const menor = () => {
    setNumPalpite(numPalpite + 1);
    setMax(palpite);
    const valor = parseInt((min + palpite) / 2);
    setPalpite(valor);
  };

  const acertou = () => {
    setEstado("FIM");
  };

  if (estado === "FIM") {
    return (
      <div>
        <p>
          Acertei o valor {palpite} em {numPalpite} tentativas
        </p>
        <button onClick={iniciarJogo}> Jogar Novamente </button>
      </div>
    );
  }

  const maior = () => {
    setNumPalpite(numPalpite + 1);
    setMin(palpite);
    const valor = parseInt((palpite + max) / 2);
    //console.log(valor)
    setPalpite(valor);
  };

  return (
    <div className="App">
      <p>O seu número é {palpite} ?</p>
      <p>
        Min: {min} / Max: {max}{" "}
      </p>
      <button onClick={menor}> Menor </button>
      <button onClick={acertou}> Acertou </button>
      <button onClick={maior}> Maior </button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
