import React from 'react'

import headerLogo from './images/minesweeper-header.svg'

export function Header({ gameStarted }) {
  return (
    <>
      <h1 className="sr-only">Minesweeper</h1>
      {!gameStarted && (
        <img
          className="m-auto mt-8 mb-8 xs:mb-16 lg:w-1/4 md:w-1/3 w-2/3"
          src={headerLogo}
          alt=""
        />
      )}
    </>
  )
}
