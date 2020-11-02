export function getRandomNumber(min, max) {
  if (typeof min !== 'number' || typeof max !== 'number') {
    throw new Error('min and max must be numbers')
  }

  return Math.floor(Math.random() * (max - min)) + min
}
