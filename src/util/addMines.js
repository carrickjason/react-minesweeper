import Prando from 'prando'
import { v4 as uuidv4 } from 'uuid'

export function addMines(grid, numberOfMinesToAdd, uuid) {
  const height = grid.length
  const width = grid[0].length
  const prando = new Prando(uuid || uuidv4())

  while (numberOfMinesToAdd) {
    let x = prando.nextInt(0, height - 1)
    let y = prando.nextInt(0, width - 1)

    if (!grid[x][y].hasMine) {
      grid[x][y].hasMine = true
      numberOfMinesToAdd--
    }
  }
}
