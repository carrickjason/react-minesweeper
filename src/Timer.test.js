import React from 'react'
import { render, screen, act } from '@testing-library/react'
import Timer from './Timer'

jest.useRealTimers()

describe('Timer', () => {
  it('updates the timer count every one second', async () => {
    render(<Timer delay={1000} />)

    expect(screen.getByText('0')).toBeInTheDocument()

    await act(() => screen.findByText('1'))
  })

  it('does not update the timer when the delay is null', async () => {
    render(<Timer delay={null} />)

    expect(screen.getByText('0')).toBeInTheDocument()
  })
})
