import React from 'react'
import { Row } from './Row'

function Board({ gameGrid, gameOver, gameWon, dispatch, children }) {
  const gameLost = gameOver && !gameWon

  if (gameGrid === null) {
    return <div />
  }

  const emptyRows = new Array(gameGrid.length).fill(null)

  return (
    <div className="m-auto">
      <div className="m-auto h-340px w-340px">
        {emptyRows.map((row, index) => (
          <Row
            gameGrid={gameGrid}
            rowIndex={index}
            gameLost={gameLost}
            dispatch={dispatch}
            gameOver={gameOver}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}

export default Board
