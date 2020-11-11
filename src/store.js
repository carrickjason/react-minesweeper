import { makeGameGrid } from './util/makeGameGrid'
import { getNumberRemainingFlags } from './util/getNumberRemainingFlags'
import { toggleFlag } from './util/toggleFlag'
import { sweepLocation } from './util/sweepLocation'
import { isGameLost } from './util/isGameLost'
import { isGameWon } from './util/isGameWon'
import {
  RESTART_GAME,
  START_GAME,
  SWEEP_CELL,
  STOP_TIMER,
  UPDATE_GAME_SETUP_VALUE,
} from './actions/constants'

const initialState = {
  gameGrid: null,
  gameStarted: false,
  height: 10,
  width: 10,
  numMines: 1,
  uuid: '',
  numRemainingFlags: 0,
  gameTimerDelay: null,
  gameOver: false,
  gameWon: false,
  gameLost: false,
}

function boardReducer(state, action) {
  switch (action.type) {
    case UPDATE_GAME_SETUP_VALUE:
      return {
        ...state,
        ...action.payload,
      }
    case RESTART_GAME:
      return { ...initialState, gameStarted: false }
    case START_GAME:
      const gameGrid = makeGameGrid(state)
      const numRemainingFlags = getNumberRemainingFlags(
        gameGrid,
        state.numMines
      )

      return {
        ...state,
        gameStarted: true,
        gameGrid,
        numRemainingFlags,
      }
    case SWEEP_CELL:
      const { x, y, shiftKey } = action.payload
      let gameTimerDelay = 1000
      if (shiftKey) {
        const updatedGrid = toggleFlag(state.gameGrid, x, y)
        return {
          ...state,
          gameGrid: updatedGrid,
          numRemainingFlags: getNumberRemainingFlags(
            updatedGrid,
            state.numMines
          ),
          gameTimerDelay,
        }
      } else {
        const updatedGrid = sweepLocation(state.gameGrid, x, y)
        const gameLost = isGameLost(updatedGrid)
        const gameWon = isGameWon(updatedGrid, state.numMines)
        const gameOver = gameLost || gameWon
        if (gameOver) {
          gameTimerDelay = null
        }
        return {
          ...state,
          gameGrid: updatedGrid,
          gameOver,
          gameLost,
          gameWon,
          gameTimerDelay,
        }
      }
    case STOP_TIMER:
      return { ...state, gameTimerComponent: null }
    default:
      return state
  }
}

export { boardReducer, initialState }
