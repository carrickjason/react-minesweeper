import React from 'react'
import { Cell } from './Cell'
import { SWEEP_CELL } from './actions/constants'

export function Row({ gameGrid, rowIndex, gameLost, dispatch, gameOver }) {
  const cols = []
  for (let y = 0; y < gameGrid[rowIndex].length; ++y) {
    const cell = gameGrid[rowIndex][y]

    cols.push(
      <Cell
        isSwept={gameOver || cell.isSwept}
        isFlagged={cell.isFlagged}
        hasMine={cell.hasMine}
        mineCounts={cell.mineCounts}
        gameLost={gameLost}
        x={rowIndex}
        y={y}
        clickHandler={e => {
          const isRightClick = e.type === 'contextmenu'
          isRightClick && e.preventDefault()

          dispatch({
            type: SWEEP_CELL,
            payload: { x: rowIndex, y, shiftKey: e.shiftKey || isRightClick },
          })
        }}
        key={'cell_' + y}
      />
    )
  }

  return (
    <section className="inline-flex justify-between" key={'row_' + rowIndex}>
      {cols}
    </section>
  )
}
