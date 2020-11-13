import { removeCoordinatesOutsideOfGrid } from './removeCoordinatesOutsideOfGrid'

describe('removeCoordinatesOutsideOfGrid', () => {
  it('returns list of valid neighboring coordinates for a cell that has neighbors on all sides', () => {
    const allPossibleNeighbors = [
      [4, 4],
      [4, 3],
      [4, 2],
      [3, 4],
      [3, 3],
      [3, 2],
      [2, 4],
      [2, 3],
      [2, 2],
    ]

    const validNeighbors = removeCoordinatesOutsideOfGrid(
      allPossibleNeighbors,
      5,
      5
    )
    expect(validNeighbors).toEqual(allPossibleNeighbors)
  })

  it('returns list of valid neighboring coordinates for a cell in the upper-left corner of the grid', () => {
    const allPossibleNeighbors = [
      [1, 1],
      [1, 0],
      [1, -1],
      [0, 1],
      [0, 0],
      [0, -1],
      [-1, 1],
      [-1, 0],
      [-1, -1],
    ]

    const expectedValidNeighbors = [
      [1, 1],
      [1, 0],
      [0, 1],
      [0, 0],
    ]

    const validNeighbors = removeCoordinatesOutsideOfGrid(
      allPossibleNeighbors,
      3,
      3
    )
    expect(validNeighbors).toEqual(expectedValidNeighbors)
  })
})
