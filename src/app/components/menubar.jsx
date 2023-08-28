import React, { useState } from "react";

import burgerIconSvg from "../../../public/burger-menu.svg";

export function Menubar({ game, setGame }) {
  function handleClick() {
    const elem = document.activeElement;
    elem?.blur();
  }

  return (
    <header className="flex w-full">
      <div className="dropdown">
        <label
          tabIndex={0}
          className="btn px-1 border-0 bg-transparent hover:bg-transparent"
        >
          <img src={burgerIconSvg.src} alt="Menu" />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-44"
        >
          <li>
            <a
              className="hover:bg-blue-200 active:!bg-blue-500 active:!text-white focus:bg-blue-300 font-semibold"
              onClick={() => {
                setGame("");
                setTimeout(() => {
                  setGame("easy");
                }, 0);
                handleClick();
              }}
            >
              New game
            </a>
          </li>
          <li>
            <a
              className="hover:bg-blue-200 active:!bg-blue-500 active:!text-white focus:bg-blue-300"
              onClick={() => {
                setGame("");
                handleClick();
              }}
            >
              Blank board
            </a>
          </li>
          <li>
            <a
              className="hover:bg-blue-200 active:!bg-blue-500 active:!text-white focus:bg-blue-300"
              onClick={() => alert("This feature is coming soon")}
            >
              Leaderboard
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Menubar;
