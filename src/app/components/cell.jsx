export default function Cell({
  value,
  row,
  col,
  focusedCell,
  setFocusedCell,
  handleKeyDown,
  cellProtection,
}) {
  const hasFocusOnRowOrCol = row === focusedCell.row || col === focusedCell.col;
  const isCellProtected = cellProtection[row][col];

  return (
    <div
      className={`flex justify-center items-center ${
        hasFocusOnRowOrCol ? "bg-blue-50" : "bg-white"
      } ring-inset focus:outline-none focus:bg-blue-100 select-none`}
      tabIndex={isCellProtected ? undefined : 0}
      onFocus={() => setFocusedCell({ row, col })}
      onBlur={() => setFocusedCell({ row: null, col: null })}
      onKeyDown={(e) => handleKeyDown(e, row, col)}
    >
      {value > 0 ? value : ""}
    </div>
  );
}
