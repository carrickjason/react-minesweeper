import { isGameWon } from './isGameWon'
import { makeGameGrid } from './makeGameGrid'

describe('isGameWon', () => {
  it('returns false if no cells have been swept yet', () => {
    const grid = makeGameGrid({ height: 3, width: 3, numMines: 2, uuid: 'abc' })
    expect(isGameWon(grid, 2)).toBe(false)
  })

  it('returns false if there is a mine that has been clicked on and the game is lost', () => {
    const grid = makeGameGrid({ height: 3, width: 3, numMines: 2, uuid: 'abc' })
    grid[0][0].isSwept = true
    expect(isGameWon(grid, 2)).toBe(false)
  })

  it('returns true if all the cells have been swept and no mines have been clicked on', () => {
    const grid = makeGameGrid({ height: 3, width: 3, numMines: 8, uuid: 'abc' })
    grid[2][0].isSwept = true
    expect(isGameWon(grid, 8)).toBe(true)
  })
})
