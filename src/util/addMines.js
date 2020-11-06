import { getRandomNumber } from './getRandomNumber'
import Prando from 'prando'

export function addMines(grid, numberOfMinesToAdd, uuid) {
  const height = grid.length
  const width = grid[0].length
  const prando = new Prando(uuid)

  while (numberOfMinesToAdd) {
    let x = uuid ? prando.nextInt(0, height - 1) : getRandomNumber(0, height)
    let y = uuid ? prando.nextInt(0, width - 1) : getRandomNumber(0, width)

    if (!grid[x][y].hasMine) {
      grid[x][y].hasMine = true
      numberOfMinesToAdd--
    }
  }
}
