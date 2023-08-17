export function hasDuplicates(cells, index) {
  const value = cells[index].value;
  const row = Math.floor(index / 9);
  const col = index % 9;

  if (value === "") return false;

  // Check duplicates in the row
  for (let i = 0; i < 9; i++) {
    if (i !== col && cells[row * 9 + i].value === value) {
      return true;
    }
  }

  // Check duplicates in the column
  for (let i = 0; i < 9; i++) {
    if (i !== row && cells[i * 9 + col].value === value) {
      return true;
    }
  }

  // Check duplicates in the 3x3 box
  const startRow = Math.floor(row / 3) * 3;
  const startCol = Math.floor(col / 3) * 3;
  for (let i = startRow; i < startRow + 3; i++) {
    for (let j = startCol; j < startCol + 3; j++) {
      if (i !== row && j !== col && cells[i * 9 + j].value === value) {
        return true;
      }
    }
  }

  return false;
}
