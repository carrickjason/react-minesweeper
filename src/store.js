import Prando from 'prando'

import { makeGameGrid } from './util/makeGameGrid'
import { getNumberRemainingFlags } from './util/getNumberRemainingFlags'
import { toggleFlag } from './util/toggleFlag'
import { sweepLocation } from './util/sweepLocation'
import { isGameLost } from './util/isGameLost'
import { isGameWon } from './util/isGameWon'
import {
  RESTART_GAME,
  START_GAME,
  START_GAME_FROM_UUID,
  SWEEP_CELL,
  UPDATE_GAME_SETUP_VALUE,
} from './actions/constants'

const initialState = {
  gameGrid: null,
  gameStarted: false,
  height: 10,
  width: 10,
  numMines: 10,
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
    case START_GAME_FROM_UUID: {
      const prando = new Prando(state.uuid)
      const width = prando.nextInt(6, 20)
      const height = prando.nextInt(6, 20)

      const maxNumMines = Math.min(height * width - 1, 50)
      const numMines = prando.nextInt(1, maxNumMines)

      const gridSettings = {
        height,
        width,
        numMines,
        uuid: state.uuid,
      }

      const gameGrid = makeGameGrid(gridSettings)
      const numRemainingFlags = getNumberRemainingFlags(gameGrid, numMines)

      return {
        ...state,
        ...gridSettings,
        gameStarted: true,
        gameGrid,
        numRemainingFlags,
      }
    }
    case SWEEP_CELL:
      const { x, y, shiftKey } = action.payload
      let gameTimerDelay = 1000
      if (shiftKey) {
        const canToggleFlag =
          state.numRemainingFlags > 0 || state.gameGrid[x][y].isFlagged
        const updatedGrid = canToggleFlag
          ? toggleFlag(state.gameGrid, x, y)
          : state.gameGrid
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
        if (state.gameGrid[x][y].isFlagged) {
          return state
        }

        const updatedGrid = sweepLocation(state.gameGrid, x, y)
        const gameLost = isGameLost(updatedGrid)
        const gameWon = !gameLost && isGameWon(updatedGrid, state.numMines)
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
    default:
      return state
  }
}

export { boardReducer, initialState }
