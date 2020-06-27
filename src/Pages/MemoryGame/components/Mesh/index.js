import React, { useState } from "react";
import "./mesh.css";

//Components
import Cell from "../Cell";

// Global consts
import { PENDING, FOUND, SELECTED } from "../../global";

const Mesh = ({ cells, setCells, setGameStarted, setGameIsOver }) => {
  const [selectedIds, setSelectedIds] = useState([]);
  const [clickEnabled, setClickEnabled] = useState(true);

  function filterNamesById(id1, id2) {
    const names = cells.filter(cell => {
      return cell.id === id1 || cell.id === id2;
    });

    return [names[0].name, names[1].name];
  }

  function selectNewCell(id) {
    const new_cells = cells.map(cell => {
      if (cell.id === id) {
        cell.state = SELECTED;
      }
      return cell;
    });

    return new_cells;
  }

  function markCellsAsFound(name) {
    let new_cells = cells.map(cell => {
      if (cell.name === name) {
        cell.state = FOUND;
      }
      return cell;
    });

    return new_cells;
  }

  function resetSelectedCells(id1, id2) {
    const new_cells = cells.map(cell => {
      if (cell.id === id1 || cell.id === id2) {
        cell.state = PENDING;
      }
      return cell;
    });

    return new_cells;
  }

  function checkGameIsOver() {
    const ack = cells.filter(cell => cell.state === FOUND);
    if (ack.length === cells.length) setGameIsOver(true);
  }

  function checkCellWasFound(id) {
    const ack = cells.filter(cell => {
      return cell.id === id && cell.state === FOUND;
    });
    if (ack.length) return true;
    else return false;
  }

  function handleCellClick(id) {
    setGameStarted(true);

    if (clickEnabled && !checkCellWasFound(id)) {
      switch (selectedIds.length) {
        case 0:
          const new_cells = selectNewCell(id);

          setCells(new_cells);
          setSelectedIds([id]);
          break;

        case 1:
          if (selectedIds[0] !== id) {
            let [id1, id2] = [selectedIds[0], id];
            let [first_name, second_name] = filterNamesById(id1, id2);

            if (first_name === second_name) {
              const new_cells = markCellsAsFound(first_name);

              checkGameIsOver();
              setCells(new_cells);
              setSelectedIds([]);
            } else {
              setClickEnabled(false);
              const new_cells = selectNewCell(id);
              setCells(new_cells);

              setTimeout(() => {
                const new_cells = resetSelectedCells(id1, id2);

                setCells(new_cells);
                setSelectedIds([]);
                setClickEnabled(true);
              }, 500);
            }
          }
          break;

        default:
          break;
      }
    }
  }

  return (
    <div className="mesh">
      {cells.map(cell => (
        <Cell key={cell.id} cell={cell} handleCellClick={handleCellClick} />
      ))}
    </div>
  );
};

export default Mesh;
