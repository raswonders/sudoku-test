"use client";

import Cell from "./cell";

export default function Board({ cells, setCells }) {
  function handleInputChange(index, value) {
    const newCells = [...cells];
    newCells[index] = { ...newCells[index], value };
    setCells(newCells);
  }

  return (
    <div className="board">
      {cells.map((cell, index) => (
        <Cell
          key={index}
          value={cell.value}
          isValid={cell.isValid}
          handleChange={(newValue) => handleInputChange(index, newValue)}
        />
      ))}
    </div>
  );
}
