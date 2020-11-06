import React from 'react'

function Cell({ isSwept, isFlagged, children, clickHandler }) {
  let cellStyle = isSwept
    ? 'h-8 w-8 bg-gray-400 m-px cursor-default'
    : 'hover:bg-blue-500 focus:bg-blue-500 h-8 w-8 bg-blue-300 m-px'

  let content = ''
  if (isSwept) {
    content = children
  } else if (isFlagged) {
    content = '🚩'
  }

  return (
    <button className={cellStyle} onClick={clickHandler} disabled={isSwept}>
      {content}
    </button>
  )
}
export default Cell
