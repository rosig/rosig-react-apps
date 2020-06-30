import React from 'react';
import { Route } from 'react-router-dom';

import Home from "./Pages/Home";
import About from "./Pages/About";
import Calculator from "./Pages/Calculator";
import HexRgb from "./Pages/HEX-RGB";
import Journi from "./Pages/Journi";
import LerpRings from "./Pages/LerpRings";
import MagicCube from "./Pages/MagicCube";
import MemoryGame from "./Pages/MemoryGame";
import Todos from "./Pages/Todos";

const Routes = () => {
  return (
    <>
      <Route component={Home} path="/" exact />
      <Route component={About} path="/about" />
      <Route component={Calculator} path="/calculator" />
      <Route component={HexRgb} path="/hex-rgb" />
      <Route component={Journi} path="/journi" />
      <Route component={LerpRings} path="/lerp-rings" />
      <Route component={MagicCube} path="/magic-cube" />
      <Route component={MemoryGame} path="/memory-game" />
      <Route component={Todos} path="/todos" />
    </>
  );
};

export default Routes;