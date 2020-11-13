import { makeGameGrid } from './makeGameGrid'
import { getGridMineCount } from '../testUtils/getGridMineCount'

describe('makeGameGrid', () => {
  it('creates a game grid using the provided options', () => {
    const grid = makeGameGrid({
      height: 2,
      width: 2,
      numMines: 1,
      uuid: 'abc123',
    })

    const emptyCell = {
      hasMine: false,
      isFlagged: false,
      isSwept: false,
      mineCounts: 1,
    }

    const cellWithMine = {
      hasMine: true,
      isFlagged: false,
      isSwept: false,
      mineCounts: 1,
    }

    const expectedGrid = [
      [emptyCell, emptyCell],
      [emptyCell, cellWithMine],
    ]
    expect(grid).toEqual(expectedGrid)
  })

  it('creates a game grid with defaults when no arguments are provided', () => {
    const grid = makeGameGrid()
    expect(grid.length).toEqual(10)
    expect(grid[0].length).toEqual(10)
    expect(getGridMineCount(grid)).toEqual(5)
  })

  it('creates a game grid with defaults when only a uuid is provided', () => {
    const grid = makeGameGrid({ uuid: 'abc' })
    expect(grid.length).toEqual(10)
    expect(grid[0].length).toEqual(10)
    expect(getGridMineCount(grid)).toEqual(5)
  })
})
