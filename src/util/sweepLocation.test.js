import { sweepLocation } from './sweepLocation'
import { makeGameGrid } from './makeGameGrid'

describe('sweepLocation', () => {
  it('sweeps grid at coordinates', () => {
    const grid = makeGameGrid({
      height: 2,
      width: 2,
      numMines: 1,
      uuid: 'abc',
    })

    sweepLocation(grid, 0, 0)
    expect(grid[0][0].isSwept).toBe(true)
  })

  it('sweeps grid at coordinates and its neighbors', () => {
    const grid = makeGameGrid({
      height: 10,
      width: 10,
      numMines: 1,
      uuid: 'abc',
    })

    sweepLocation(grid, 0, 0)
    expect(grid[0][0].isSwept).toBe(true)
    expect(grid[0][1].isSwept).toBe(true)
    expect(grid[1][0].isSwept).toBe(true)
  })
})
