export function removeCoordinatesOutsideOfGrid(positions, height, width) {
  return positions.filter(position => {
    return (
      position[0] >= 0 &&
      position[0] < height &&
      position[1] >= 0 &&
      position[1] < width
    )
  })
}
