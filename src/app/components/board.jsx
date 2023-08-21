"use client";

import { useState } from "react";
import { Quicksand } from "next/font/google";
import Cell from "./cell";
import { getCellsInGrid } from "../utils";

const quicksand = Quicksand({
  subsets: ["latin"],
  weights: [400, 600],
});

export function Grid9x9({ cellValues, setCellValues, cellProtection }) {
  const [focusedCell, setFocusedCell] = useState({ row: null, col: null });

  function handleKeyDown(event, row, col) {
    if (cellProtection[row][col]) return;

    const newCellValues = [...cellValues.map((row) => [...row])];

    if (event.key >= "1" && event.key <= "9") {
      newCellValues[row][col] = parseInt(event.key, 10);
    } else if (event.key === "Delete" || event.key === "Backspace") {
      newCellValues[row][col] = 0;
    }

    setCellValues(newCellValues);
  }

  return (
    <div className={`grid9x9 ${quicksand.className} font-scaling`}>
      {Array(9)
        .fill(null)
        .map((_, i) => (
          <Grid3x3
            key={i}
            gridIndex={i}
            cells={getCellsInGrid(cellValues, i)}
            focusedCell={focusedCell}
            setFocusedCell={setFocusedCell}
            handleKeyDown={handleKeyDown}
          />
        ))}
    </div>
  );
}

export function Grid3x3({
  gridIndex,
  cells,
  focusedCell,
  setFocusedCell,
  handleKeyDown = { handleKeyDown },
}) {
  const rowInGrid9x9 = Math.floor(gridIndex / 3);
  const colInGrid9x9 = gridIndex % 3;

  return (
    <div className="grid3x3 rounded-lg overflow-hidden umbra-6dp">
      {cells.map((value, i) => {
        const rowInGrid3x3 = Math.floor(i / 3);
        const colInGrid3x3 = i % 3;
        const row = rowInGrid9x9 * 3 + rowInGrid3x3;
        const col = colInGrid9x9 * 3 + colInGrid3x3;

        return (
          <Cell
            key={i}
            value={value}
            row={row}
            col={col}
            focusedCell={focusedCell}
            setFocusedCell={setFocusedCell}
            handleKeyDown={handleKeyDown}
          />
        );
      })}
    </div>
  );
}
