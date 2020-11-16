import App from './App'
import { render, screen, fireEvent } from '@testing-library/react'

describe('App', () => {
  it('renders the new game controls when a game has not been started yet', () => {
    render(<App />)

    expect(screen.getByText('Minesweeper')).toBeInTheDocument()

    expect(screen.getByText('Number of Columns:')).toBeInTheDocument()
    expect(screen.getByText('Number of Rows:')).toBeInTheDocument()
    expect(screen.getByText('Number of Mines:')).toBeInTheDocument()
    expect(screen.getByText('Create New Game')).toBeInTheDocument()

    expect(screen.getByText('Enter a UUID:')).toBeInTheDocument()
    expect(screen.getByText('Start Game')).toBeInTheDocument()
  })

  it('renders the game board when a game is in progress', () => {
    render(<App />)
    fireEvent.click(screen.getByText('Create New Game'))

    expect(screen.getByText('Minesweeper')).toBeInTheDocument()

    expect(screen.getByText('Flags Left: 1')).toBeInTheDocument()
    expect(screen.getByText('Game Time:')).toBeInTheDocument()
    expect(screen.getByText('Quit')).toBeInTheDocument()
  })
})
