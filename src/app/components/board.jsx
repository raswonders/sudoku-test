"use client";

import Cell from "./cell";
import { getCellsInGrid } from "../utils";

export function Grid9x9({ cellValues, setCellValues }) {
  return (
    <div className="grid9x9">
      {Array(9).fill(null).map((_, i) => (
        <Grid3x3 key={i} cells={getCellsInGrid(cellValues, i)} />
      ))}
    </div>
  );
}

export function Grid3x3({ cells }) {
  console.log(cells)
  return (
    <div className="grid3x3 rounded-lg overflow-hidden umbra-6dp">
      {cells.map((value, i) => (
        <Cell key={i} value={value} />
      ))}
    </div>
  );
}
