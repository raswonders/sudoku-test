export function getCellsInGrid(board, grid) {
  const size = 3;
  const startRow = Math.floor(grid / size) * size;
  const startCol = (grid % size) * size;

  const result = [];
  for (let row = startRow; row < startRow + size; row++) {
    for (let col = startCol; col < startCol + size; col++) {
      result.push(board[row][col]);
    }
  }

  return result;
}

export function getCellsInRow(board, row) {
  return board[row];
}

export function getCellsInCol(board, col) {
  const result = [];
  for (let row = 0; row < board.length; row++) {
    result.push(board[row][col]);
  }
  return result;
}
