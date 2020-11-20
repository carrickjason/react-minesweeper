import React from 'react'
import { colorMap } from './constants/colors'
import flag from './images/flag.svg'

export function Cell({ isSwept, isFlagged, children, clickHandler, hasMine }) {
  const cellStyle = isSwept
    ? 'bg-darkBlue cursor-default font-bold'
    : 'hover:bg-eggshell focus:bg-eggshell bg-white'

  let content = ''
  if (isSwept) {
    content = children
  } else if (isFlagged) {
    content = <img src={flag} alt="Flagged Cell" className="m-auto" />
  }

  // is not swept and not flagged: Unswept Cell
  // is not swpet and is flagged: Flagged Cell
  // is swept and has mine: not need to handle

  const textColor = isSwept && content ? `text-${colorMap[content]}` : ''
  return (
    <button
      className={`h-8 w-8 m-sm rounded-sm transition-colors duration-200 ${cellStyle} ${textColor}`}
      onClick={clickHandler}
      onContextMenu={clickHandler}
      disabled={isSwept}
      data-testid="grid-cell"
      data-dirty={hasMine}
      aria-label={
        !content ? (isSwept ? 'Swept Cell' : `Unswept Cell`) : undefined
      }
    >
      {content}
    </button>
  )
}
