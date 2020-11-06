export function makeEmptyGameGrid({ height = 10, width = 10 } = {}) {
  let grid = []
  for (let x = 0; x < height; ++x) {
    grid.push([])
    for (let y = 0; y < width; ++y) {
      grid[x].push({
        hasMine: false,
        isSwept: false,
        mineCounts: 0,
        isFlagged: false,
      })
    }
  }

  return grid
}
