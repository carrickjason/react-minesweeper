export function getNumberRemainingFlags(gameGrid,numMines) {
  let flaggedSpaces = gameGrid.reduce((count, row) => {
      return count + row.reduce((initCount, cell) => {
          if (cell.isFlagged) {
              initCount++;
          }
          return initCount;
      }, 0);
  }, 0);

  return numMines - flaggedSpaces;
}
