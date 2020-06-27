import React from 'react';
import { Route } from 'react-router-dom';

//Components
import Home from "./Pages/Home";
import About from "./Pages/About";

const Routes = () => {
  return (
    <>
      <Route component={Home} path="/" exact />
      <Route component={About} path="/about" />
    </>
  );
};

export default Routes;