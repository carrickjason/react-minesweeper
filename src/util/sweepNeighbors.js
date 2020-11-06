import { getNeighbors } from './getNeighbors'
import { sweepLocation } from './sweepLocation'

export function sweepNeighbors(gameGrid, x, y) {
  let neighbors = getNeighbors(gameGrid, x, y)

  neighbors.forEach(neighbor => {
    let [neighborX, neighborY] = neighbor
    let neighborCell = gameGrid[neighborX][neighborY]
    if (
      !neighborCell.hasMine &&
      neighborCell.isSwept !== true &&
      neighborCell.isFlagged !== true
    ) {
      sweepLocation(gameGrid, neighborX, neighborY)
    }
  })
  return gameGrid
}
