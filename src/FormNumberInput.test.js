import React from 'react'
import { render, screen } from '@testing-library/react'

import { FormNumberInput } from './FormNumberInput'

describe('FormNumberInput', () => {
  it('renders a label and input correctly', () => {
    const numColumns = 'Number of Columns:'
    render(
      <FormNumberInput
        label={numColumns}
        id="width"
        min={1}
        max={20}
        value={1}
      />
    )
    const input = screen.getByLabelText(numColumns)

    expect(screen.getByText(numColumns)).toBeInTheDocument()
    expect(input).toBeInTheDocument()
    expect(input.id).toBe('width')
    expect(input.value).toBe('1')
    expect(input.min).toBe('1')
    expect(input.max).toBe('20')
  })
})
