import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders new game controls', () => {
  const { getByText } = render(<App />)
  const linkElement = getByText(/num mines/i)
  expect(linkElement).toBeInTheDocument()
})
