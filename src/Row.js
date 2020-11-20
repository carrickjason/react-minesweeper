import React from 'react'
import { Cell } from './Cell'
import { SWEEP_CELL } from './actions/constants'
import bomb from './images/bomb.svg'
import heart from './images/heart.svg'

export function Row({ gameGrid, rowIndex, gameLost, dispatch, gameOver }) {
  const cols = []
  for (let y = 0; y < gameGrid[rowIndex].length; ++y) {
    const cell = gameGrid[rowIndex][y]
    let cellContents = cell.mineCounts || ''

    if (cell.hasMine) {
      const image = gameLost ? bomb : heart
      const alt = gameLost ? 'Bomb' : 'Heart'
      cellContents = (
        <img src={image} alt={alt} className="m-auto" width={20} height={20} />
      )
    }

    cols.push(
      <Cell
        isSwept={gameOver || cell.isSwept}
        isFlagged={cell.isFlagged}
        hasMine={cell.hasMine}
        clickHandler={e => {
          const isRightClick = e.type === 'contextmenu'
          isRightClick && e.preventDefault()

          dispatch({
            type: SWEEP_CELL,
            payload: { x: rowIndex, y, shiftKey: e.shiftKey || isRightClick },
          })
        }}
        key={'cell_' + y}
      >
        {cellContents}
      </Cell>
    )
  }

  return (
    <section className="inline-flex justify-between" key={'row_' + rowIndex}>
      {cols}
    </section>
  )
}
