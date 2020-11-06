import { sweepNeighbors } from './sweepNeighbors'

export function sweepLocation(gameGrid, x, y) {
  gameGrid[x][y].isSwept = true

  if (gameGrid[x][y].mineCounts === 0) {
    gameGrid = sweepNeighbors(gameGrid, x, y)
  }
  return gameGrid
}
