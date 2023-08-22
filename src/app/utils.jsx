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

export function createCellProtection(board) {
  const cellProtection = [];

  for (let i = 0; i < 9; i++) {
    const row = [];
    for (let j = 0; j < 9; j++) {
      row.push(board[i][j] !== 0);
    }
    cellProtection.push(row);
  }

  return cellProtection;
}

export function getSubgridIndex(row, col) {
  const subgridRow = Math.floor(row / 3) * 3;
  const subgridCol = Math.floor(col / 3) * 3;

  const subgridIndex = subgridRow + Math.floor(subgridCol / 3);

  return subgridIndex;
}

export function getRowDuplicates(board, row, origin) {
  const duplicates = [];
  const searchedRow = board[row];
  for (let col = 0; col < searchedRow.length; col++) {
    if (searchedRow[col] === origin) {
      duplicates.push([row, col]);
    }
  }

  return duplicates;
}

export function getColDuplicates(board, col, origin) {
  const duplicates = [];
  const searchedCol = getCellsInCol(board, col);
  for (let row = 0; row < searchedCol.length; row++) {
    if (searchedCol[row] === origin) {
      duplicates.push([row, col]);
    }
  }

  return duplicates;
}

export function getGridDuplicates(board, row, col, origin) {
  const result = [];
  const grid3x3Row = Math.floor(row / 3);
  const grid3x3Col = Math.floor(col / 3);
  const startRow = grid3x3Row * 3;
  const startCol = grid3x3Col * 3;

  for (let i = startRow; i < startRow + 3; i++) {
    for (let j = startCol; j < startCol + 3; j++) {
      if (board[i][j] === origin) {
        result.push([i, j]);
      }
    }
  }

  return result;
}

export function clearDuplicates(cellArray, origin) {
  // keep just unique entries
  const uniqueCells = new Set();
  for (const cell of cellArray) {
    uniqueCells.add(JSON.stringify(cell));
  }

  // remove origin cell
  uniqueCells.delete(JSON.stringify(origin));

  return Array.from(uniqueCells).map(JSON.parse);
}

export function getCellsInConflict(board, row, col, value) {
  const dupsRow = getRowDuplicates(board, row, value);
  const dupsCol = getColDuplicates(board, col, value);
  const dupsGrid = getGridDuplicates(board, row, col, value);
  const dups = [].concat(dupsRow, dupsCol, dupsGrid);

  return clearDuplicates(dups, [row, col]);
}

export function addAdjacentErrors(board, errorBoard, row, col, value) {
  const cellsInError = getCellsInConflict(board, row, col, value);
  cellsInError.forEach(([row, col]) => {
    errorBoard[row][col] += 1;
  });

  return cellsInError.length;
}

export function clearAdjacentErrors(board, errorBoard, row, col, value) {
  const cellsInError = getCellsInConflict(board, row, col, value);
  cellsInError.forEach(([row, col]) => {
    errorBoard[row][col] += errorBoard[row][col] > 0 ? -1 : 0;
  });

  return cellsInError.length;
}
