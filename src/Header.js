import React from 'react'

import headerLogo from './images/minesweeper-header.svg'

export function Header() {
  return (
    <>
      <h1 className="sr-only">Minesweeper</h1>
      <img
        className="m-auto mt-8 mb-16 lg:w-1/2 w-2/3"
        src={headerLogo}
        alt=""
      />
    </>
  )
}
