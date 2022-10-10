import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState<string>();
  const [corBotao, setCorBotao] = useState<string[]>([]);
  const [errado, setErrado] = useState(false);

  /* Gerar nº Hex */
  /* 16777215 == ffffff */
  const corAleatoria = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  const corDoBloco = () => {
    const cor = corAleatoria();
    setColor(cor);
    setCorBotao(
      [
        cor,
        corAleatoria(),
        corAleatoria(),
        corAleatoria(),
        corAleatoria(),
      ].sort(function () {
        return 0.5 - Math.random();
      })
    );
  };

  useEffect(() => {
    corDoBloco();
  }, []);

  /* Informa se está errado ou não e gera nova cor caso esteja correto */
  function click(resposta: string) {
    if (resposta === color) {
      setErrado(false);
      corDoBloco();
    } else {
      setErrado(true);
    }
  }
  /* Página  */
  return (
    <div className="App">
      <div className="adivinha">
        <div className="cor" style={{ background: color }}></div>
        <div className="botaoarea">
          {corBotao.map((resposta) => (
            <button
              onClick={() => click(resposta)}
              key={resposta}
              className="botao"
            >
              {resposta}
            </button>
          ))}
          {errado && <div className="errou">Tente Novamente!</div>}
        </div>
      </div>
    </div>
  );
}

export default App;
