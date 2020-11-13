import { toggleFlag } from './toggleFlag'
import { makeGameGrid } from './makeGameGrid'

describe('toggleFlag', () => {
  it('toggles isFlagged at coordinates', () => {
    const grid = makeGameGrid()
    const modifiedGrid = toggleFlag(grid, 0, 0)
    expect(modifiedGrid[0][0].isFlagged).toBe(true)
  })
})
