import { isGameLost } from './isGameLost'
import { makeGameGrid } from './makeGameGrid'

describe('isGameLost', () => {
  it('returns false if no cells have been swept yet', () => {
    const grid = makeGameGrid({ height: 3, width: 3, numMines: 2, uuid: 'abc' })
    expect(isGameLost(grid)).toBe(false)
  })

  it('returns false if there are no mines that have been clicked on', () => {
    const grid = makeGameGrid({ height: 3, width: 3, numMines: 2, uuid: 'abc' })
    grid[0][2].isSwept = true
    expect(isGameLost(grid)).toBe(false)
  })

  it('returns true if there is a mine that has been clicked on', () => {
    const grid = makeGameGrid({ height: 3, width: 3, numMines: 2, uuid: 'abc' })
    grid[0][0].isSwept = true
    expect(isGameLost(grid)).toBe(true)
  })
})
