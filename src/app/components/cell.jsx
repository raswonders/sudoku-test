import { useEffect, useState } from "react";

const INP_REGEX = /^(?:[1-9]|)$/;

export default function Cell({ value, handleChange }) {
  const [validInput, setValidInput] = useState(true);

  useEffect(() => {
    setValidInput(INP_REGEX.test(value));
  });

  return (
    <input
      type="number"
      value={value}
      className={`border border-1 border-slate-400 text-center ${
        validInput ? "" : "bg-red-400"
      }`}
      onChange={(e) => handleChange(e.target.value)}
    ></input>
  );
}
