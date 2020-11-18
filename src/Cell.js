import React from 'react'
import { colorMap } from './constants/colors'

export function Cell({ isSwept, isFlagged, children, clickHandler }) {
  const cellStyle = isSwept
    ? 'bg-gray-400 cursor-default font-bold'
    : 'hover:bg-eggshell focus:bg-eggshell bg-white'

  let content = ''
  if (isSwept) {
    content = children
  } else if (isFlagged) {
    content = '🚩'
  }

  return (
    <button
      className={`h-8 w-8 m-sm rounded-sm transition-colors duration-200 ${cellStyle}`}
      style={isSwept ? { color: colorMap[content] } : undefined}
      onClick={clickHandler}
      disabled={isSwept}
      data-testid="grid-cell"
    >
      {content}
    </button>
  )
}
