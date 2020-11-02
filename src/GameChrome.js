import React from 'react'
import Scoreboard from './Scoreboard'
import Board from './Board'
import { RESTART_GAME } from './actions/constants'

const getStatusMessage = ({ gameLost, gameWon }) => {
  return gameLost ? 'You lost!' : gameWon ? 'You won!' : 'Have fun!'
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
      >
        <span>{statusMessage}</span>
      </Scoreboard>
      <Board {...state} dispatch={dispatch} />
      {restartButton}
    </div>
  )
}

export default GameChrome
