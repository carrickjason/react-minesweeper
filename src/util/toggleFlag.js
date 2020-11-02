export function toggleFlag(gameGrid, x, y) {
  return Object.assign([], [...gameGrid], {
    [x]: Object.assign([], [...gameGrid][x], {
      [y]: Object.assign([], [...gameGrid][x][y], {
        isFlagged: !gameGrid[x][y].isFlagged,
      }),
    }),
  })
}
