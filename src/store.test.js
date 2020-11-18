import { boardReducer, initialState } from './store'

describe('boardReducer', () => {
  it('returns the same state when an unknown action is passed', () => {
    expect(boardReducer(initialState, { type: 'BAD_ACTION_TYPE' })).toBe(
      initialState
    )
  })
})
