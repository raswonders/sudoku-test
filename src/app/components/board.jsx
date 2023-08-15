"use client";

import Cell from "./cell";

export default function Board({ cells, setCells, checkDuplicates }) {
  function handleInputChange(index, value) {
    const newCells = [...cells];
    newCells[index] = { ...newCells[index], value };

    if (!checkDuplicates(cells, index)) {
      newCells[index] = { ...newCells, value: "" };
    } else {
      setCells(newCells);
    }
  }

  return (
    <div className="board">
      {cells.map((cell, index) => (
        <Cell
          key={index}
          value={cell.value}
          handleChange={(newValue) => handleInputChange(index, newValue)}
        />
      ))}
    </div>
  );
}
