const neighborCoordinates = [1, 0, -1]

export function getAllPossibleCoordinates(x, y) {
  const positions = []

  neighborCoordinates.forEach(xMod => {
    neighborCoordinates.forEach(yMod => {
      positions.push([x + xMod, y + yMod])
    })
  })

  return positions
}
