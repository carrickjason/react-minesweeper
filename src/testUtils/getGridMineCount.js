export const getGridMineCount = grid =>
  grid.flat().reduce((totalMinesFound, gridCell) => {
    if (gridCell.hasMine) {
      return totalMinesFound + 1
    }

    return totalMinesFound
  }, 0)
