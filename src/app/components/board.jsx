"use client";

import Cell from "./cell";

export default function Board({
  cells,
  setCells,
  hasDuplicates,
  setFocusedCell,
}) {
  function handleInputChange(index, value) {
    const newCells = [...cells];
    newCells[index] = { ...newCells[index], value };
    newCells[index] = { isValid: !hasDuplicates(newCells, index), value };
    setCells(newCells);
  }

  function handleFocus(index) {
    setFocusedCell(index);
  }

  function handleBlur() {
    setFocusedCell(null);
  }

  return (
    <div className="board">
      {cells.map((cell, index) => (
        <Cell
          key={index}
          value={cell.value}
          isValid={cell.isValid}
          handleChange={(newValue) => handleInputChange(index, newValue)}
          handleFocus={() => handleFocus(index)}
          handleBlur={handleBlur}
        />
      ))}
    </div>
  );
}
