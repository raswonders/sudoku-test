export default function Cell({ value, isValid, handleChange }) {
  function handleKeyDown(e) {
    const bkspPressed = e.key === "Backspace" || e.keyCode === 8;
    const deletePressed = e.key === "Delete" || e.keyCode === 46;
    const digit = parseInt(e.key, 10);
    if (!isNaN(digit) && digit >= 1 && digit <= 9) {
      e.preventDefault();
      handleChange(String(digit));
    }

    if (bkspPressed || deletePressed) {
      e.preventDefault();
      handleChange("");
    }
  }

  return (
    <input
      type="number"
      value={value}
      className={`border border-1 border-slate-400 text-center ${
        isValid ? "" : "bg-red-400"
      }`}
      onChange={(e) => handleChange(e.target.value)}
      onKeyDown={(e) => handleKeyDown(e)}
    ></input>
  );
}
