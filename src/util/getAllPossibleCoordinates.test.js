import { getAllPossibleCoordinates } from './getAllPossibleCoordinates'

describe('getAllPossibleCoordinates', () => {
  it('returns list of neighboring coordinates', () => {
    const neighbors = getAllPossibleCoordinates(3, 3)
    expect(neighbors).toEqual([
      [4, 4],
      [4, 3],
      [4, 2],
      [3, 4],
      [3, 3],
      [3, 2],
      [2, 4],
      [2, 3],
      [2, 2],
    ])
  })
})
