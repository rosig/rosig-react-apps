import React, { useState } from "react";
import "./style.css";

const letters = [
  { letter: "W", color: "#61D9FA", animationDuration: "1.5s" },
  { letter: "e", color: "#DEDEDE", animationDuration: "1.4s" },
  { letter: "l", color: "#844DE3", animationDuration: "1.5s" },
  { letter: "c", color: "#4DE34F", animationDuration: "1.3s" },
  { letter: "o", color: "#FBE667", animationDuration: "1.5s" },
  { letter: "m", color: "#61D9FA", animationDuration: "1.4s" },
  { letter: "e", color: "#DEDEDE", animationDuration: "1.5s" }
];

const Letter = props => {
  const [style] = useState({
    color: props.params.color,
    animationDuration: props.params.animationDuration
  });
  return (
    <div className="letter-container">
      <p>
        <span style={style}>{props.params.letter}</span>
      </p>
    </div>
  );
};

const Word = () => {
  const word = letters.map((letter, index) => (
    <Letter key={index} params={letter} />
  ));
  return word;
};

const Home = () => {
  return (
    <div className="home-container">
      <Word />
    </div>
  );
};

export default Home;
