import { getRandomNumber } from './getRandomNumber'

describe('getRandomNumber', () => {
  it('returns a number', () => {
    expect(typeof getRandomNumber(0, 5)).toBe('number')
  })

  it('returns number between min and max', () => {
    const min = 0
    const max = 5
    const result = getRandomNumber(min, max)

    expect(result).toBeGreaterThanOrEqual(min)
    expect(result).toBeLessThanOrEqual(max)
  })

  it('throws an error if a number is not passed for min or max', () => {
    expect(() => getRandomNumber('hello', 'world')).toThrow()
  })
})
