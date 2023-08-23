"use client";

import { useState, useRef } from "react";
import { Grid9x9 } from "./components/board";
import { Keypad } from "./components/keypad";
import { test1 } from "../../data/board-mocks";

export default function Home() {
  const [cellValues, setCellValues] = useState(
    Array.from({ length: 9 }, () => Array(9).fill(0))
  );
  const [cellValuesGiven, setCellValuesGiven] = useState(
    Array.from({ length: 9 }, () => Array(9).fill(0))
  );
  const [cellSolution, setCellSolution] = useState(
    Array.from({ length: 9 }, () => Array(9).fill(0))
  );
  const [cellProtection, setCellProtection] = useState(
    Array.from({ length: 9 }, () => Array(9).fill(false))
  );
  const [cellErrors, setCellErrors] = useState(
    Array.from({ length: 9 }, () => Array(9).fill(0))
  );

  const gridRef = useRef(null);

  // for testing purposes only
  // const [cellValues, setCellValues] = useState(test1.cellValues);
  // const [cellSolution, setCellSolution] = useState(test1.cellSolution);
  // const [cellProtection, setCellProtection] = useState(test1.cellProtection);
  // const [cellValuesGiven, setCellValuesGiven] = useState(test1.cellValuesGiven);

  return (
    <main className="px-4 py-6 w-full h-full flex justify-center">
      <div className="w-full h-full max-w-screen-lg flex flex-col justify-between items-center">
        <div className="flex-grow flex flex-col justify-center">
          <Grid9x9
            cellValues={cellValues}
            setCellValues={setCellValues}
            cellProtection={cellProtection}
            cellSolution={cellSolution}
            cellErrors={cellErrors}
            setCellErrors={setCellErrors}
            cellValuesGiven={cellValuesGiven}
            ref={gridRef}
          />
          <Keypad gridRef={gridRef} />
        </div>
      </div>
    </main>
  );
}
