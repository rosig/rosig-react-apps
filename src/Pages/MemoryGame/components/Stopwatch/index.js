import React, { useState, useEffect } from "react";
import "./stopwatch.css";

const Stopwatch = ({ gameStarted, gameIsOver }) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (!gameIsOver) {
      if (gameStarted) {
        const interval = setInterval(() => {
          setSeconds(seconds => seconds + 1);
        }, 1000);
        return () => clearInterval(interval);
      } else {
        setSeconds(0);
      }
    }
  }, [gameStarted, gameIsOver]);

  return (
    <div className={gameIsOver ? "stopwatch gameOver" : "stopwatch"}>
      {seconds + " s"}
    </div>
  );
};

export default Stopwatch;