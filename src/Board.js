import React from 'react'
import Cell from './Cell'
import styles from './styles.js'
import { SWEEP_CELL } from './actions/constants'

function renderRow(gameGrid, rowIndex, gameLost, dispatch) {
  const cols = []
  for (let y = 0; y < gameGrid[rowIndex].length; ++y) {
    let cellContents = gameGrid[rowIndex][y].mineCounts || ''
    if (gameGrid[rowIndex][y].hasMine) {
      cellContents = gameLost ? '💥' : '🔻'
    }
    cols.push(
      <Cell
        isSwept={gameLost || gameGrid[rowIndex][y].isSwept}
        isFlagged={gameGrid[rowIndex][y].isFlagged}
        clickHandler={e => {
          e.stopPropagation()
          dispatch({
            type: SWEEP_CELL,
            payload: { x: rowIndex, y, shiftKey: e.shiftKey },
          })
        }}
        key={'cell_' + y}
      >
        {cellContents}
      </Cell>
    )
  }

  return (
    <section style={styles.row} key={'row_' + rowIndex}>
      {cols}
    </section>
  )
}

function Board({ gameGrid, gameOver, gameWon, dispatch, children }) {
  const gameLost = gameOver && !gameWon

  if (gameGrid === null) {
    return <div />
  }

  let rows = []
  for (let x = 0; x < gameGrid.length; ++x) {
    rows.push(renderRow(gameGrid, x, gameLost, dispatch))
  }

  return (
    <div>
      <main style={styles.board}>{rows}</main>
    </div>
  )
}

export default Board
