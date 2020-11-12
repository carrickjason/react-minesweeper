const neighborCoordinates = [1, 0, -1]

export function getAllPossibleCoordinates(x, y) {
  const positions = []

  neighborCoordinates.forEach(xNeighborCoordinate => {
    neighborCoordinates.forEach(yNeighborCoordinate => {
      positions.push([x + xNeighborCoordinate, y + yNeighborCoordinate])
    })
  })

  return positions
}
