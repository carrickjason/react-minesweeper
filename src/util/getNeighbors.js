export function getNeighbors(gameGrid, x, y) {
  let positions = [];
  const height = gameGrid.length;
  const width = gameGrid[0].length;

  //get all possible coordinates
  [1, 0, -1].forEach((xMod) => {
      [1, 0, -1].forEach((yMod) => {
          positions.push([x + xMod, y + yMod]);
      })
  });

  //remove coordinates outside of grid
  return positions.filter((position) => {
      return position[0] >= 0 && position[0] < height
          && position[1] >= 0 && position[1] < width;
  });
}