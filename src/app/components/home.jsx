"use client";

import { useState, useEffect } from "react";
import { Header } from "./header";
import { Button } from "./button";
import Board from "./board";
import { hasDuplicates } from "../utils";

export default function Home() {
  const [cells, setCells] = useState(
    Array(81).fill({ value: "", isValid: true })
  );
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 480px)").matches
  );

  useEffect(() => {
    const mobileMediaQuery = window.matchMedia("(max-width: 480px)");
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mobileMediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mobileMediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const allValuesSet = cells.every((cell) => cell.value !== "");
  const isValidBoard = cells.every((cell) => cell.isValid);
  const isSolution = allValuesSet && isValidBoard;

  function handleClearAll() {
    setCells(Array(81).fill({ value: "", isValid: true }));
  }

  function solve(cells) {
    const newCells = [...cells];

    for (let i = 0; i < 81; i++) {
      if (newCells[i].value === "") {
        for (let guess = 1; guess < 10; guess++) {
          newCells[i] = { ...newCells[i], value: guess.toString() };
          if (!hasDuplicates(newCells, i)) {
            if (solve(newCells)) {
              return true;
            }
          } else {
            newCells[i] = { ...newCells[i], value: "" };
          }
        }
        return false;
      }
    }
    setCells(newCells);
    return true;
  }

  return (
    <main className="px-4 py-6 w-full h-full flex justify-center">
      <div className="w-full h-full max-w-screen-lg flex flex-col justify-between items-center">
        {!isSolution && (
          <Header appMode="solver" title="Fill in your challenge" />
        )}
        {isSolution && <Header appMode="solver" title="Solution found!" />}

        <div className="flex-grow flex flex-col justify-center">
          <Board
            cells={cells}
            setCells={setCells}
            hasDuplicates={hasDuplicates}
          />

          {!isSolution && (
            <div className="space-x-8 mt-10 flex justify-center">
              <Button
                variant="filled"
                onClick={() => solve(cells)}
                disabled={!isValidBoard}
              >
                Solve
              </Button>
              <Button variant="outlined" onClick={handleClearAll}>
                Clear
              </Button>
            </div>
          )}

          {isSolution && (
            <div className="space-x-8 mt-10 flex justify-center">
              <Button
                variant="filled"
                onClick={() => alert("This feature is coming soon")}
                disabled={!isValidBoard}
              >
                Export
              </Button>
              <Button variant="outlined" onClick={handleClearAll}>
                Back
              </Button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
