import React from 'react'
import { Row } from './Row'

function Board({ gameGrid, gameOver, gameWon, dispatch }) {
  const gameLost = gameOver && !gameWon
  const emptyRows = new Array(gameGrid.length).fill(null)

  return (
    <div className="m-auto">
      <div className="m-auto inline-flex flex-col">
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
