import { addMines } from './addMines'
import { makeEmptyGameGrid } from './makeEmptyGameGrid'

describe('addMines', () => {
  it('adds the appropriate amount of mines to the grid', () => {
    const numberOfMinesToAdd = 3
    const grid = makeEmptyGameGrid({ height: 3, width: 3 })

    addMines(grid, numberOfMinesToAdd, undefined)

    const minesFound = grid.flat().reduce((totalMinesFound, gridCell) => {
      if (gridCell.hasMine) {
        return totalMinesFound + 1
      }

      return totalMinesFound
    }, 0)

    expect(minesFound).toBe(3)
  })

  it('consistently adds mines to the same grid cells when a uuid is provided', () => {
    const numberOfMinesToAdd = 3
    const grid = makeEmptyGameGrid({ height: 3, width: 3 })
    const uuid = '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

    addMines(grid, numberOfMinesToAdd, uuid)

    const minesFound = grid.flat().reduce((totalMinesFound, gridCell) => {
      if (gridCell.hasMine) {
        return totalMinesFound + 1
      }

      return totalMinesFound
    }, 0)

    expect(minesFound).toBe(3)
    expect(grid[0][1].hasMine).toBe(true)
    expect(grid[0][2].hasMine).toBe(true)
    expect(grid[1][0].hasMine).toBe(true)
  })
})
