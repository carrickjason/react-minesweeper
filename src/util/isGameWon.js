export function isGameWon(gameGrid, numMines) {
  const width = gameGrid.length
  const height = gameGrid[0].length
  let sweptSpaces = gameGrid.reduce((count, row) => {
    return (
      count +
      row.reduce((initCount, cell) => {
        if (cell.isSwept) {
          initCount++
        }
        return initCount
      }, 0)
    )
  }, 0)

  let totalSpaces = width * height
  return sweptSpaces === totalSpaces - numMines
}
