"use client";

import { useState } from "react";
import { Header } from "./components/Header";
import { Button } from "./components/Button";
import Board from "./components/board";

export default function Home() {
  const [cells, setCells] = useState(Array(81).fill(""));

  function handleClearAll() {
    setCells(Array(81).fill(''));
  }

  function solve (cells) {
    
    const newCells = [...cells];

    for(let i = 0; i < 81; i++){
      if(newCells[i] === ''){
        for(let guess = 1; guess < 10; guess++){
          newCells[i] = guess.toString();
          if(!checkDuplicates(newCells, i)){
            if(solve(newCells)){
              return true;
            }
          } else {
            newCells[i] = '';
          }
        }
        return false
      }
      console.log("solving sudoku. iteration n: " + i );
    }
    setCells(newCells);
    console.log("sudoku solved \n" + cells);
    return true;
  }

  function checkDuplicates(cells, index) {
    const value = cells[index];
    const row = Math.floor(index / 9);
    const col = index % 9;
  
    // Check duplicates in the row
    for (let i = 0; i < 9; i++) {
      if (i !== col && cells[row * 9 + i] === value) {
        return true;
      }
    }
  
    // Check duplicates in the column
    for (let i = 0; i < 9; i++) {
      if (i !== row && cells[i * 9 + col] === value) {
        return true;
      }
    }
  
    // Check duplicates in the 3x3 box
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    for (let i = startRow; i < startRow + 3; i++) {
      for (let j = startCol; j < startCol + 3; j++) {
        if (i !== row && j !== col && cells[i * 9 + j] === value) {
          return true;
        }
      }
    }
  
    return false;
  }    
  

  return (
    <main className="px-4 py-6 w-full h-full flex justify-center">
      <div className="w-full h-full max-w-screen-lg flex flex-col justify-between items-center">
        <Header appMode="solver" title="Fill in your challenge" />
        <div className="flex-grow flex flex-col justify-center">
          <Board cells={cells} setCells={setCells} checkDuplicates={checkDuplicates}/>
          <div className="space-x-8 mt-10 flex justify-center">
            <Button variant="filled" onClick={() => solve(cells)}>Solve</Button>
            <Button variant="outlined" onClick={handleClearAll}>Clear</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
