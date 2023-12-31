"use client";

import { useState, forwardRef, useImperativeHandle } from "react";
import { Quicksand } from "next/font/google";
import Cell from "./cell";
import {
  getCellsInGrid,
  addAdjacentErrors,
  clearAdjacentErrors,
  solveAllCells,
  hasError,
  getCellsInError,
  getRandomEmptyCell,
} from "../utils";

const quicksand = Quicksand({
  subsets: ["latin"],
  weights: [400, 600],
});

const nonSolutionIsMistake = false;

export const Grid9x9 = forwardRef(
  (
    {
      game,
      cellValues,
      setCellValues,
      cellProtection,
      cellErrors,
      setCellErrors,
      cellSolution,
      cellValuesGiven,
      setAssists,
    },
    ref
  ) => {
    const [focusedCell, setFocusedCell] = useState({ row: null, col: null });
    const isFreeForm = game === "off";

    function resetAll() {
      let newCellValues;
      if (isFreeForm) {
        newCellValues = Array.from({ length: 9 }, () => Array(9).fill(0));
      } else {
        newCellValues = [...cellValuesGiven.map((row) => [...row])];
      }
      const newCellErrors = Array.from({ length: 9 }, () => Array(9).fill(0));
      setCellErrors(newCellErrors);
      setCellValues(newCellValues);
    }

    function handleKeypadInput(value) {
      if (focusedCell.row === null) return;

      const row = focusedCell.row;
      const col = focusedCell.col;

      handleInput(value, row, col);
    }

    // Expose functions to ref
    useImperativeHandle(ref, () => ({
      handleKeypadInput,
      resetAll,
      hintSudoku,
    }));

    function handleInput(value, row, col, assistUsed = false) {
      if (cellProtection[row][col]) return;

      const newCellValues = [...cellValues.map((row) => [...row])];
      const newCellErrors = [...cellErrors.map((row) => [...row])];
      const prevValue = newCellValues[row][col];

      if (value >= "1" && value <= "9") {
        let int = parseInt(value, 10);

        if (int === prevValue) return;

        // clear prev errors
        newCellErrors[row][col] = 0;
        clearAdjacentErrors(newCellValues, newCellErrors, row, col, prevValue);

        // add new errors
        const errorsCreated = addAdjacentErrors(
          newCellValues,
          newCellErrors,
          row,
          col,
          int
        );

        if (errorsCreated > 0 && !assistUsed) setAssists((prev) => prev + 1);

        if (isFreeForm || !nonSolutionIsMistake) {
          newCellErrors[row][col] = errorsCreated;
        } else if (cellSolution[row][col] !== int) {
          // +1 for bad answer
          newCellErrors[row][col] = 1;
          newCellErrors[row][col] += errorsCreated;
        }

        newCellValues[row][col] = int;
      } else if (value === "Delete" || value === "Backspace") {
        // clear errors
        newCellErrors[row][col] = 0;
        clearAdjacentErrors(newCellValues, newCellErrors, row, col, prevValue);

        newCellValues[row][col] = 0;
      }

      setCellErrors(newCellErrors);
      setCellValues(newCellValues);
    }

    function solveBoard() {
      if (hasError(cellErrors)) {
        window.board_in_error.showModal();
        return;
      }

      const newCellValues = [...cellValues.map((row) => [...row])];
      solveAllCells(newCellValues);
      setCellValues(newCellValues);
    }

    function hintSudoku() {
      if (isFreeForm) {
        solveBoard();
        return;
      }

      solveOneCell();
    }

    function solveOneCell() {
      setAssists((prev) => prev + 1);

      // 1st hint cell with most errors
      const errorCells = getCellsInError(cellErrors);
      if (errorCells.length > 0) {
        for (let errorCell of errorCells) {
          let [row, col] = errorCell;
          if (cellValues[row][col] !== cellSolution[row][col]) {
            handleInput(String(cellSolution[row][col]), row, col, true);
            return;
          }
        }
      }

      // 2nd hint random empty cell
      const emptyCell = getRandomEmptyCell(cellValues);
      if (emptyCell) {
        let [row, col] = emptyCell;
        handleInput(String(cellSolution[row][col]), row, col);
      }
    }

    return (
      <div ref={ref} className={`grid9x9 ${quicksand.className} font-scaling`}>
        {Array(9)
          .fill(null)
          .map((_, i) => (
            <Grid3x3
              key={i}
              gridIndex={i}
              cells={getCellsInGrid(cellValues, i)}
              focusedCell={focusedCell}
              setFocusedCell={setFocusedCell}
              handleInput={handleInput}
              cellProtection={cellProtection}
              cellErrors={cellErrors}
            />
          ))}
      </div>
    );
  }
);

// Add display name to get rid of ESLINT warning
Grid9x9.displayName = "Grid9x9";

export function Grid3x3({
  gridIndex,
  cells,
  focusedCell,
  setFocusedCell,
  handleInput = { handleInput },
  cellProtection = { cellProtection },
  cellErrors = { cellErrors },
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
            handleInput={handleInput}
            cellProtection={cellProtection}
            cellErrors={cellErrors}
          />
        );
      })}
    </div>
  );
}
