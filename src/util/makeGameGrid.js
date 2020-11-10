import { makeEmptyGameGrid } from './makeEmptyGameGrid'
import { addMines } from './addMines'
import { setMineCounts } from './setMineCounts'

export function makeGameGrid({
  height = 10,
  width = 10,
  numMines = 5,
  uuid,
} = {}) {
  const grid = makeEmptyGameGrid({ height, width })
  addMines(grid, Math.min(numMines, height * width), uuid)
  setMineCounts(grid)
  return grid
}
