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

  it('renders the game board when you have started a game by clicking the Play button', () => {
    render(<App />)
    fireEvent.click(screen.getByText('Play'))

    expect(screen.getByText('Minesweeper')).toBeInTheDocument()

    expect(screen.getByText('Flags Left: 1')).toBeInTheDocument()
    expect(screen.getByText('Game Time:')).toBeInTheDocument()
    expect(screen.getByText('Quit')).toBeInTheDocument()
  })

  it('renders the game board when you have started a game by clicking the Start button', () => {
    render(<App />)

    fireEvent.change(screen.getByLabelText('Or enter a UUID'), {
      target: { value: 'abc' },
    })
    fireEvent.click(screen.getByText('Start'))

    expect(screen.getByText('Minesweeper')).toBeInTheDocument()

    expect(screen.getByText('Flags Left: 11')).toBeInTheDocument()
    expect(screen.getByText('Game Time:')).toBeInTheDocument()
    expect(screen.getByText('Quit')).toBeInTheDocument()
  })

  it('can be played all the way until you lose', () => {
    render(<App />)

    fireEvent.change(screen.getByLabelText('Or enter a UUID'), {
      target: { value: 'abc' },
    })
    fireEvent.click(screen.getByText('Start'))

    fireEvent.click(screen.getAllByTestId('grid-cell')[0])

    expect(screen.getByText('You lost!')).toBeInTheDocument()
    expect(screen.getByText('New Game')).toBeInTheDocument()

    fireEvent.click(screen.getByText('New Game'))

    expect(screen.getByText('Minesweeper')).toBeInTheDocument()

    expect(screen.getByText('Columns')).toBeInTheDocument()
    expect(screen.getByText('Rows')).toBeInTheDocument()
    expect(screen.getByText('Mines')).toBeInTheDocument()
    expect(screen.getByText('Play')).toBeInTheDocument()

    expect(screen.getByText('Or enter a UUID')).toBeInTheDocument()
    expect(screen.getByText('Start')).toBeInTheDocument()
  })

  it('can be played all the way until you win', () => {
    render(<App />)

    fireEvent.change(screen.getByLabelText('Or enter a UUID'), {
      target: { value: 'abc' },
    })
    fireEvent.click(screen.getByText('Start'))

    const gridCells = screen.getAllByTestId('grid-cell')
    const safeCells = [3, 5, 7, 8, 12, 15, 17]

    safeCells.forEach(cellIndex => fireEvent.click(gridCells[cellIndex]))

    expect(screen.getByText('You won!')).toBeInTheDocument()
    expect(screen.getByText('New Game')).toBeInTheDocument()

    fireEvent.click(screen.getByText('New Game'))

    expect(screen.getByText('Minesweeper')).toBeInTheDocument()

    expect(screen.getByText('Columns')).toBeInTheDocument()
    expect(screen.getByText('Rows')).toBeInTheDocument()
    expect(screen.getByText('Mines')).toBeInTheDocument()
    expect(screen.getByText('Play')).toBeInTheDocument()

    expect(screen.getByText('Or enter a UUID')).toBeInTheDocument()
    expect(screen.getByText('Start')).toBeInTheDocument()
  })
})
