import { getNeighbors } from './getNeighbors'
import { makeGameGrid } from './makeGameGrid'

describe('getNeighbors', () => {
  it('returns list of neighboring coordinates for a cell that has neighbors on all sides', () => {
    const grid = makeGameGrid({ height: 4, width: 4, numMines: 3 })
    const neighbors = getNeighbors(grid, 2, 2)
    expect(neighbors).toEqual([
      [3, 3],
      [3, 2],
      [3, 1],
      [2, 3],
      [2, 2],
      [2, 1],
      [1, 3],
      [1, 2],
      [1, 1],
    ])
  })

  it('returns list of neighboring coordinates for a cell in the upper-left corner of the grid', () => {
    const grid = makeGameGrid({ height: 4, width: 4, numMines: 3 })
    const neighbors = getNeighbors(grid, 0, 0)
    expect(neighbors).toEqual([
      [1, 1],
      [1, 0],
      [0, 1],
      [0, 0],
    ])
  })
})
