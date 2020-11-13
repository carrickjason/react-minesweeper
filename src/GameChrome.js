import React from 'react'
import Scoreboard from './Scoreboard'
import Board from './Board'
import { Button } from './Button'
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
        <div className="text-3xl text-center m-auto bg-gray-400 mt-8 p-3 w-1/6 rounded">
          {statusMessage}
        </div>
      )}
      <Button
        additionalClasses="mt-8"
        onClick={() => dispatch({ type: RESTART_GAME })}
      >
        {state.gameOver ? 'New Game' : 'Quit'}
      </Button>
    </div>
  )
}

export default GameChrome
