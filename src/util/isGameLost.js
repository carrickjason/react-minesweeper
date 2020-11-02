export function isGameLost(gameGrid) {
  for (let x = 0; x < gameGrid.length; ++x) {
      for (let y = 0; y < gameGrid[x].length; ++y) {
          if (gameGrid[x][y].isSwept && gameGrid[x][y].hasMine) {
              return true;
          }
      }
  }
  return false;
}
