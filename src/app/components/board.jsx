"use client";

import Cell from "./cell";

export default function Board({ cells, setCells, checkDuplicates }) {
    
  function handleInputChange(index, value) {
    const updatedCells = [...cells];
    updatedCells[index] = value;
    
    if(!checkDuplicates(cells, index)){
      updatedCells[index] = '';
    } else {
    setCells(updatedCells);
    }
  }

  return (
    <div className="board">
      {cells.map((value, index) => (
        <Cell
          key={index}
          value={value}
          handleChange={(newValue) => handleInputChange(index, newValue)}
        />
      ))}
    </div>
  );
}

