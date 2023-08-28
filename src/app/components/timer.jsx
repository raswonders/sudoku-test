import React, { useState, useEffect } from "react";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
  weights: [400, 600],
});

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval;

    const startTimer = () => {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    };

    startTimer();

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formattedTime = new Date(time * 1000)
    .toISOString()
    .slice(14, 19)
    .replace(/:/g, "\u00A0:\u00A0"); // use non-breaking space colon

  return (
    <div
      className={`${quicksand.className} text-xl text-white w-[5ch] text-justify`}
    >
      {formattedTime}
    </div>
  );
}

export default Timer;
