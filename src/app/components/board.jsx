"use client";

import { Quicksand } from "next/font/google";
import Cell from "./cell";
import { getCellsInGrid } from "../utils";

const quicksand = Quicksand({
  subsets: ["latin"],
  weights: [400, 600],
});

export function Grid9x9({ cellValues, setCellValues }) {
  return (
    <div className={`grid9x9 ${quicksand.className} font-scaling`}>
      {Array(9)
        .fill(null)
        .map((_, i) => (
          <Grid3x3 key={i} cells={getCellsInGrid(cellValues, i)} />
        ))}
    </div>
  );
}

export function Grid3x3({ cells }) {
  console.log(cells);
  return (
    <div className="grid3x3 rounded-lg overflow-hidden umbra-6dp">
      {cells.map((value, i) => (
        <Cell key={i} value={value} />
      ))}
    </div>
  );
}
