import React from 'react'
import { colorMap } from './constants/colors'
import flag from './images/flag.svg'
import bomb from './images/bomb.svg'
import heart from './images/heart.svg'

export function Cell({
  isSwept,
  isFlagged,
  clickHandler,
  hasMine,
  mineCounts,
  gameLost,
  x,
  y,
}) {
  const cellStyle = isSwept
    ? 'bg-darkBlue cursor-default font-bold'
    : 'hover:bg-eggshell focus:bg-eggshell bg-white'
  const coordinatesLabel = `Cell in row ${x + 1} column ${y + 1}:`

  let content = ''
  if (isSwept) {
    if (hasMine) {
      const image = gameLost ? bomb : heart
      const alt = gameLost ? 'Exploded Mine' : 'Avoided Mine'
      content = (
        <img
          src={image}
          alt={`${coordinatesLabel} ${alt}`}
          className="m-auto"
          width={20}
          height={20}
        />
      )
    } else if (mineCounts) {
      content = mineCounts
    }
  } else if (isFlagged) {
    content = (
      <img
        src={flag}
        alt={`${coordinatesLabel} Flagged Cell`}
        className="m-auto"
      />
    )
  }

  let ariaLabel
  if (!content) {
    if (isSwept) {
      ariaLabel = 'Swept Cell with 0 Neighboring Mines'
    } else {
      ariaLabel = 'Unswept Cell'
    }
  } else {
    if (typeof content === 'number') {
      ariaLabel = `Swept Cell with ${content} Neighboring ${
        content === 1 ? 'Mine' : 'Mines'
      }`
    }
  }

  const textColor = isSwept && content ? `text-${colorMap[content]}` : ''

  return (
    <button
      className={`h-8 w-8 m-sm rounded-sm transition-colors duration-200 ${cellStyle} ${textColor}`}
      onClick={clickHandler}
      onContextMenu={clickHandler}
      disabled={isSwept}
      data-testid="grid-cell"
      data-dirty={hasMine}
      aria-label={ariaLabel && `${coordinatesLabel} ${ariaLabel}`}
    >
      {content}
    </button>
  )
}
