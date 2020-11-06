import React from 'react'
import Scoreboard from './Scoreboard'
import Board from './Board'
import { RESTART_GAME } from './actions/constants'

const getStatusMessage = ({ gameLost, gameWon }) => {
  return gameLost ? 'You lost!' : gameWon ? 'You won!' : null
}

function getRestartButton(state, dispatch) {
  let restartButton = ''
  if (state.gameOver) {
    restartButton = (
      <button onClick={() => dispatch({ type: RESTART_GAME })}>New Game</button>
    )
  }
  return restartButton
}

function GameChrome({ state, dispatch }) {
  const statusMessage = getStatusMessage(state)
  let restartButton = getRestartButton(state, dispatch)

  return (
    <div>
      <Scoreboard
        delay={state.gameTimerDelay}
        numRemainingFlags={state.numRemainingFlags}
      />
      <Board {...state} dispatch={dispatch} />
      <div className="text-xl m-8">{statusMessage}</div>
      {restartButton}
    </div>
  )
}

export default GameChrome
