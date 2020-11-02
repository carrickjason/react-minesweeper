import { getRandomNumber } from './getRandomNumber.js'

export function addMines(grid, minesToAdd) {
  const height = grid.length
  const width = grid[0].length
  while (minesToAdd) {
    let x = getRandomNumber(0, height)
    let y = getRandomNumber(0, width)

    if (!grid[x][y].hasMine) {
      grid[x][y].hasMine = true
      minesToAdd--
    }
  }
}
