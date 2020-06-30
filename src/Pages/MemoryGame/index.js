import React, { useState } from 'react';
import "./style.css";

//Data
import cells_json from "./cells.json";

//Components
import Mesh from "./components/Mesh";
import Stopwatch from "./components/Stopwatch";

function MemoryGame() {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameIsOver, setGameIsOver] = useState(false);
  const [cells, setCells] = useState(shuffleCells([...cells_json, ...cells_json]));

  function shuffleCells(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    const new_cells = array.map((item, index) => {
      return {
        name: item.name,
        state: item.state,
        id: index
      };
    });

    return new_cells;
  }

  function resetGame() {
    setGameStarted(false);
    setCells(shuffleCells([...cells_json, ...cells_json]));
    setGameIsOver(false);
  };

  return (
    <div className="memory-game-container">
      <h1> MEMORY GAME </h1>
      <Stopwatch gameStarted={gameStarted} gameIsOver={gameIsOver} />
      <Mesh cells={cells} setCells={setCells} setGameStarted={setGameStarted} setGameIsOver={setGameIsOver} />
      <button onClick={resetGame}>Reset Game</button>
    </div>
  );
}

export default MemoryGame;
