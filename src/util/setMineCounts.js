import { getNeighbors } from './getNeighbors.js'

export function setMineCounts(grid) {
  const height = grid.length;
  const width = grid[0].length;
  for (let x = 0; x < height; ++x) {
      for (let y = 0; y < width; ++y) {
          if (grid[x][y].hasMine) {
              let updatePositions = getNeighbors(grid, x, y);
              updatePositions.forEach((position) => {
                  grid[position[0]][position[1]].mineCounts++;
              });
          }
      }
  }
}