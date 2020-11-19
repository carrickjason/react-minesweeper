import React from 'react'
import Scoreboard from './Scoreboard'
import Board from './Board'
import { Button } from './Button'
import { RESTART_GAME } from './actions/constants'
import youLost from './images/you-lost.svg'
import youWin from './images/you-win.svg'
import minesweeperLogo from './images/minesweeper-logo.svg'

const statusImageClass = `m-auto my-12`

const getStatusMessage = ({ gameLost, gameWon }) => {
  return gameLost ? (
    <img src={youLost} alt="You lost" className={statusImageClass} />
  ) : gameWon ? (
    <img src={youWin} alt="You win" className={statusImageClass} />
  ) : null
}

function GameChrome({ state, dispatch }) {
  const statusMessage = getStatusMessage(state)

  return (
    <div className="lg:pt-12 pt-4">
      <Scoreboard
        delay={state.gameTimerDelay}
        numRemainingFlags={state.numRemainingFlags}
      />
      <Board {...state} dispatch={dispatch} />
      {statusMessage}
      <Button
        buttonStyle={state.gameOver ? 'primary' : 'secondary'}
        additionalClasses="mt-8"
        onClick={() => dispatch({ type: RESTART_GAME })}
      >
        {state.gameOver
          ? state.gameLost
            ? 'Retry'
            : 'Play Again'
          : 'Quit Game'}
      </Button>
      {!state.gameOver && (
        <img
          src={minesweeperLogo}
          alt="Minesweeper Logo"
          className="m-auto mt-12"
        />
      )}
    </div>
  )
}

export default GameChrome
