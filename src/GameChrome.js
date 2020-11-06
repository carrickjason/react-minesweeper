import React from 'react'
import Scoreboard from './Scoreboard'
import Board from './Board'
import { RESTART_GAME } from './actions/constants'

const getStatusMessage = ({ gameLost, gameWon }) => {
  return gameLost ? 'You lost!' : gameWon ? 'You won!' : null
}

function GameChrome({ state, dispatch }) {
  const statusMessage = getStatusMessage(state)

  return (
    <div>
      <Scoreboard
        delay={state.gameTimerDelay}
        numRemainingFlags={state.numRemainingFlags}
      />
      <Board {...state} dispatch={dispatch} />
      {statusMessage && (
        <div className="text-3xl text-center m-auto bg-gray-400 mt-8 mb-8 p-3 w-1/6 rounded">
          {statusMessage}
        </div>
      )}
      {state.gameOver && (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => dispatch({ type: RESTART_GAME })}
        >
          New Game
        </button>
      )}
    </div>
  )
}

export default GameChrome
