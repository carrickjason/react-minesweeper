import { makeEmptyGameGrid } from './makeEmptyGameGrid'

describe('makeEmptyGameGrid', () => {
  it('makes a two-dimensional array using the height and width provided', () => {
    const grid = makeEmptyGameGrid({ height: 3, width: 3 })

    const expectedCellResult = {
      hasMine: false,
      isSwept: false,
      mineCounts: 0,
      isFlagged: false,
    }

    const expectedGridResult = [
      [expectedCellResult, expectedCellResult, expectedCellResult],
      [expectedCellResult, expectedCellResult, expectedCellResult],
      [expectedCellResult, expectedCellResult, expectedCellResult],
    ]

    expect(grid).toEqual(expectedGridResult)
  })

  it('defaults to a 10 by 10 grid if no arguments are provided', () => {
    const grid = makeEmptyGameGrid()

    const expectedCellResult = {
      hasMine: false,
      isSwept: false,
      mineCounts: 0,
      isFlagged: false,
    }

    const expectedGridResult = [
      [
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
      ],
      [
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
      ],
      [
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
      ],
      [
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
      ],
      [
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
      ],
      [
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
      ],
      [
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
      ],
      [
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
      ],
      [
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
      ],
      [
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
        expectedCellResult,
      ],
    ]

    expect(grid).toEqual(expectedGridResult)
  })
})
