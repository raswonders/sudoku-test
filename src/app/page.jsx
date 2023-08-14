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

  return (
    <main className="px-4 py-6 w-full h-full flex justify-center">
      <div className="w-full h-full max-w-screen-lg flex flex-col justify-between items-center">
        <Header appMode="solver" title="Fill in your challenge" />
        <div>
          <Board cells={cells} setCells={setCells} />
          <div className="space-x-8 mt-6 flex justify-center">
            <Button variant="filled">Solve</Button>
            <Button variant="outlined" onClick={handleClearAll}>Clear</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
