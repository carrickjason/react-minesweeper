import { getNumberRemainingFlags } from './getNumberRemainingFlags'
import { makeGameGrid } from './makeGameGrid'

describe('getNumberRemainingFlags', () => {
  it('gets the number of remaining flags with new game board', () => {
    const grid = makeGameGrid()
    expect(getNumberRemainingFlags(grid, 5)).toBe(5)
  })

  it('gets the number of remaining flags with played game grid', () => {
    const grid = makeGameGrid()
    grid[0][0].isFlagged = true
    expect(getNumberRemainingFlags(grid, 5)).toBe(4)
  })
})
