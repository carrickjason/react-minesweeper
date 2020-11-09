import React from 'react'
import { Cell } from './Cell'
import { SWEEP_CELL } from './actions/constants'

export function Row({ gameGrid, rowIndex, gameLost, dispatch, gameOver }) {
  const cols = []
  for (let y = 0; y < gameGrid[rowIndex].length; ++y) {
    let cellContents = gameGrid[rowIndex][y].mineCounts || ''
    if (gameGrid[rowIndex][y].hasMine) {
      cellContents = gameLost ? '💥' : '🔻'
    }
    cols.push(
      <Cell
        isSwept={gameOver || gameGrid[rowIndex][y].isSwept}
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
    <section className="flex justify-between" key={'row_' + rowIndex}>
      {cols}
    </section>
  )
}
