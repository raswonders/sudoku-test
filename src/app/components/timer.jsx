import React, { useState, useEffect } from "react";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
  weights: [400, 600],
});

function Timer({ time, setTime, game }) {
  useEffect(() => {
    let interval;

    const startTimer = () => {
      interval = setInterval(() => {
        if (game === "on") setTime((prevTime) => prevTime + 1);
      }, 1000);
    };

    startTimer();

    return () => {
      clearInterval(interval);
    };
  }, [game]);

  const formattedTime = new Date(time * 1000)
    .toISOString()
    .slice(14, 19)
    .replace(/:/g, "\u00A0:\u00A0"); // use non-breaking space colon

  return (
    <div
      className={`flex justify-center items-center mb-2 ${
        game === "on" ? "" : "opacity-0"
      }`}
    >
      <div
        className={`${quicksand.className} text-xl text-white w-[5ch] text-justify`}
      >
        {formattedTime}
      </div>
    </div>
  );
}

export default Timer;
