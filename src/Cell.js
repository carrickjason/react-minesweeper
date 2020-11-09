import React from 'react'

function Cell({ isSwept, isFlagged, children, clickHandler }) {
  const cellStyle = isSwept
    ? 'bg-gray-400 cursor-default'
    : 'hover:bg-blue-500 focus:bg-blue-500 bg-blue-300'

  let content = ''
  if (isSwept) {
    content = children
  } else if (isFlagged) {
    content = '🚩'
  }

  return (
    <button
      className={`h-8 w-8 m-px transition-colors duration-200 ${cellStyle}`}
      onClick={clickHandler}
      disabled={isSwept}
    >
      {content}
    </button>
  )
}
export default Cell
