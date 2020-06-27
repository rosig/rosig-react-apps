import React from "react";
import "./cell.css";

import { PENDING, SELECTED } from "../../global";

const Cell = ({ cell, handleCellClick }) => {
  return (
    <div className={cell.state === PENDING ? "cell pending" : cell.state === SELECTED ? "cell selected" : "cell found"} onClick={() => handleCellClick(cell.id)}>
      {cell.name}
    </div>
  );
};

export default Cell;