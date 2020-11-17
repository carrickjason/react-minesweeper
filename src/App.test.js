import App from './App'
import { render, screen, fireEvent } from '@testing-library/react'

describe('App', () => {
  it('renders the new game controls when a game has not been started yet', () => {
    render(<App />)

    expect(screen.getByText('Minesweeper')).toBeInTheDocument()

    expect(screen.getByText('Columns')).toBeInTheDocument()
    expect(screen.getByText('Rows')).toBeInTheDocument()
    expect(screen.getByText('Mines')).toBeInTheDocument()
    expect(screen.getByText('Play')).toBeInTheDocument()

    expect(screen.getByText('Or enter a UUID')).toBeInTheDocument()
    expect(screen.getByText('Start')).toBeInTheDocument()
  })

  it('renders the game board when a game is in progress', () => {
    render(<App />)
    fireEvent.click(screen.getByText('Play'))

    expect(screen.getByText('Minesweeper')).toBeInTheDocument()

    expect(screen.getByText('Flags Left: 1')).toBeInTheDocument()
    expect(screen.getByText('Game Time:')).toBeInTheDocument()
    expect(screen.getByText('Quit')).toBeInTheDocument()
  })
})
