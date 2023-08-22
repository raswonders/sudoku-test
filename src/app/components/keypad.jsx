"use client";

import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
  weights: [400, 600],
});

export function Keypad({ gridRef }) {
  function handleClick(event) {
    const value = event.target.value;
    gridRef.current.setInputValue(value);
  }

  return (
    <div
      className={`keypad select-none justify-center mt-4 ${quicksand.className} font-semibold text-white text-2xl`}
    >
      <Key value="S" className="solve-key" />
      <Key value="R" className="restart-key" />
      <Key
        value={1}
        className="digit-1-key"
        handleClick={(e) => handleClick(e)}
      />
      <Key
        value={2}
        className="digit-2-key"
        handleClick={(e) => handleClick(e)}
      />
      <Key
        value={3}
        className="digit-3-key"
        handleClick={(e) => handleClick(e)}
      />
      <Key
        value={4}
        className="digit-4-key"
        handleClick={(e) => handleClick(e)}
      />
      <Key
        value={5}
        className="digit-5-key"
        handleClick={(e) => handleClick(e)}
      />
      <Key
        value={6}
        className="digit-6-key"
        handleClick={(e) => handleClick(e)}
      />
      <Key
        value={7}
        className="digit-7-key"
        handleClick={(e) => handleClick(e)}
      />
      <Key
        value={8}
        className="digit-8-key"
        handleClick={(e) => handleClick(e)}
      />
      <Key
        value={9}
        className="digit-9-key"
        handleClick={(e) => handleClick(e)}
      />
      <Key value="E" className="erase-key" />
    </div>
  );
}

function Key({ value, className, handleClick }) {
  return (
    <button
      className={`button ${className} rounded-lg focus:outline-none font-scaling-keypad`}
      onClick={handleClick}
    >
      {value}
    </button>
  );
}
