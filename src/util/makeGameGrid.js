import { addMines } from './addMines.js'
import { setMineCounts } from './setMineCounts.js'

export function makeGameGrid({ height = 10, width = 10, numMines = 5, uuid }) {
  let grid = []
  for (let x = 0; x < height; ++x) {
    grid.push([])
    for (let y = 0; y < width; ++y) {
      grid[x].push({
        hasMine: false,
        isSwept: false,
        mineCounts: 0,
        isFlagged: false,
      })
    }
  }

  addMines(grid, Math.min(numMines, height * width), uuid)
  setMineCounts(grid)
  return grid
}
