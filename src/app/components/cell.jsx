import { useEffect, useState } from "react";

export default function Cell({ value, isValid, handleChange }) {
  return (
    <input
      type="number"
      value={value}
      className={`border border-1 border-slate-400 text-center ${
        isValid ? "" : "bg-red-400"
      }`}
      onChange={(e) => handleChange(e.target.value)}
    ></input>
  );
}
