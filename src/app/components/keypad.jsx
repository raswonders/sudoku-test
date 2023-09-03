"use client";

import { Quicksand } from "next/font/google";
import resetSvg from "../../../public/reset.svg";
import backspaceSvg from "../../../public/backspace.svg";
import hintSvg from "../../../public/hint.svg";

const quicksand = Quicksand({
  subsets: ["latin"],
  weights: [400, 600],
});

export function Keypad({ gridRef, game, setGame }) {
  function handleClick(value) {
    if (value === "Reset") {
      if (game === "off") {
        window.clear_confirm.showModal();
      } else {
        const userConfirmed = window.confirm(
          "Do you really want to re-generate the board?"
        );

        if (userConfirmed) setGame("fetch");
      }

      return;
    }

    if (value === "Hint") {
      gridRef.current.hintSudoku();
      return;
    }

    gridRef.current.handleKeypadInput(value);
  }

  return (
    <div
      className={`keypad select-none justify-center mt-4 ${quicksand.className} font-semibold text-white text-2xl`}
    >
      <HintKey className="hint-key" handleClick={() => handleClick("Hint")} />
      <ResetKey
        className="restart-key"
        handleClick={() => handleClick("Reset")}
      />
      <Key
        value={1}
        className="digit-1-key"
        handleClick={() => handleClick("1")}
      />
      <Key
        value={2}
        className="digit-2-key"
        handleClick={() => handleClick("2")}
      />
      <Key
        value={3}
        className="digit-3-key"
        handleClick={() => handleClick("3")}
      />
      <Key
        value={4}
        className="digit-4-key"
        handleClick={() => handleClick("4")}
      />
      <Key
        value={5}
        className="digit-5-key"
        handleClick={() => handleClick("5")}
      />
      <Key
        value={6}
        className="digit-6-key"
        handleClick={() => handleClick("6")}
      />
      <Key
        value={7}
        className="digit-7-key"
        handleClick={() => handleClick("7")}
      />
      <Key
        value={8}
        className="digit-8-key"
        handleClick={() => handleClick("8")}
      />
      <Key
        value={9}
        className="digit-9-key"
        handleClick={() => handleClick("9")}
      />
      <BkspKey
        className="erase-key"
        handleClick={() => handleClick("Delete")}
      />
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

function ResetKey({ className, handleClick }) {
  return (
    <button
      className={`button ${className} rounded-lg focus:outline-none font-scaling-keypad flex justify-center items-center`}
      onClick={handleClick}
    >
      <img src={resetSvg.src} alt="Reset" />
    </button>
  );
}

function BkspKey({ className, handleClick }) {
  return (
    <button
      className={`button ${className} rounded-lg focus:outline-none font-scaling-keypad flex justify-center items-center`}
      onClick={handleClick}
    >
      <img src={backspaceSvg.src} alt="Erase" />
    </button>
  );
}

function HintKey({ className, handleClick }) {
  return (
    <button
      className={`button ${className} rounded-lg focus:outline-none font-scaling-keypad flex justify-center items-center`}
      onClick={handleClick}
    >
      <img src={hintSvg.src} alt="Hint" />
    </button>
  );
}
