import React from 'react'
import { render, screen } from '@testing-library/react'

import { Cell } from './Cell'

const noop = () => {}

describe('Cell', () => {
  it('renders an unswept cell', () => {
    render(
      <Cell
        isSwept={false}
        isFlagged={false}
        clickHandler={noop}
        hasMine={false}
      />
    )
    expect(screen.getByLabelText('Unswept Cell')).toBeInTheDocument()
  })

  it('renders a flagged and unswept cell', () => {
    render(
      <Cell isSwept={false} isFlagged clickHandler={noop} hasMine={false} />
    )
    expect(screen.getByAltText('Flagged Cell')).toBeInTheDocument()
  })

  it('renders a swept cell that contains no text', () => {
    render(
      <Cell isSwept isFlagged={false} clickHandler={noop} hasMine={false} />
    )
    expect(
      screen.getByLabelText('Swept Cell with 0 Neighboring Mines')
    ).toBeInTheDocument()
  })
})
