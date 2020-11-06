import { getAllPossibleCoordinates } from './getAllPossibleCoordinates'
import { removeCoordinatesOutsideOfGrid } from './removeCoordinatesOutsideOfGrid'

export function getNeighbors(gameGrid, x, y) {
  const positions = getAllPossibleCoordinates(x, y)

  const height = gameGrid.length
  const width = gameGrid[0].length

  return removeCoordinatesOutsideOfGrid(positions, height, width)
}
