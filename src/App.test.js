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

    expect(screen.getByText('Flags Left')).toBeInTheDocument()
    expect(screen.getByText('Game Time')).toBeInTheDocument()
    expect(screen.getByText('Quit Game')).toBeInTheDocument()
    expect(screen.getByAltText('Minesweeper Logo')).toBeInTheDocument()
  })

  it('renders the game board when you have started a game by clicking the Start button', () => {
    render(<App />)

    fireEvent.change(screen.getByLabelText('Or enter a UUID'), {
      target: { value: 'abc' },
    })
    fireEvent.click(screen.getByText('Start'))

    expect(screen.getByText('Flags Left')).toBeInTheDocument()
    expect(screen.getByText('Game Time')).toBeInTheDocument()
    expect(screen.getByText('Quit Game')).toBeInTheDocument()
    expect(screen.getByAltText('Minesweeper Logo')).toBeInTheDocument()
  })

  it('can be played all the way until you lose', () => {
    render(<App />)

    fireEvent.change(screen.getByLabelText('Or enter a UUID'), {
      target: { value: 'abc' },
    })
    fireEvent.click(screen.getByText('Start'))

    fireEvent.click(screen.getAllByTestId('grid-cell')[0])

    expect(screen.getByAltText('You lost')).toBeInTheDocument()
    expect(screen.getByText('Retry')).toBeInTheDocument()

    fireEvent.click(screen.getByText('Retry'))

    expect(screen.getByText('Minesweeper')).toBeInTheDocument()

    expect(screen.getByText('Columns')).toBeInTheDocument()
    expect(screen.getByText('Rows')).toBeInTheDocument()
    expect(screen.getByText('Mines')).toBeInTheDocument()
    expect(screen.getByText('Play')).toBeInTheDocument()

    expect(screen.getByText('Or enter a UUID')).toBeInTheDocument()
    expect(screen.getByText('Start')).toBeInTheDocument()
  })

  it('can be played all the way until you win', () => {
    const { container } = render(<App />)

    fireEvent.change(screen.getByLabelText('Or enter a UUID'), {
      target: { value: 'abc' },
    })
    fireEvent.click(screen.getByText('Start'))
    const safeCells = container.querySelectorAll('[data-dirty="false"]')
    safeCells.forEach(cell => fireEvent.click(cell))

    expect(screen.getByAltText('You win')).toBeInTheDocument()
    expect(screen.getByText('Play Again')).toBeInTheDocument()

    fireEvent.click(screen.getByText('Play Again'))

    expect(screen.getByText('Minesweeper')).toBeInTheDocument()

    expect(screen.getByText('Columns')).toBeInTheDocument()
    expect(screen.getByText('Rows')).toBeInTheDocument()
    expect(screen.getByText('Mines')).toBeInTheDocument()
    expect(screen.getByText('Play')).toBeInTheDocument()

    expect(screen.getByText('Or enter a UUID')).toBeInTheDocument()
    expect(screen.getByText('Start')).toBeInTheDocument()
  })

  it('allows you to flag and unflag cells with shift key', () => {
    render(<App />)

    fireEvent.change(screen.getByLabelText('Mines'), { target: { value: '1' } })
    fireEvent.click(screen.getByText('Play'))

    const gridCells = screen.getAllByTestId('grid-cell')

    fireEvent.click(gridCells[0], { shiftKey: true })
    expect(screen.getByAltText('Flag')).toBeInTheDocument()

    fireEvent.click(gridCells[1], { shiftKey: true })
    expect(screen.getAllByAltText('Flag').length).toBe(1)

    fireEvent.click(gridCells[0])
    expect(screen.getByAltText('Flag')).toBeInTheDocument()

    fireEvent.click(gridCells[0], { shiftKey: true })
    expect(screen.queryByAltText('Flag')).not.toBeInTheDocument()
  })

  it('allows you to flag and unflag cells with right click', () => {
    render(<App />)

    fireEvent.change(screen.getByLabelText('Mines'), { target: { value: '1' } })
    fireEvent.click(screen.getByText('Play'))

    const gridCells = screen.getAllByTestId('grid-cell')

    fireEvent.contextMenu(gridCells[0])
    expect(screen.getByAltText('Flag')).toBeInTheDocument()

    fireEvent.contextMenu(gridCells[1])
    expect(screen.getAllByAltText('Flag').length).toBe(1)

    fireEvent.click(gridCells[0])
    expect(screen.getByAltText('Flag')).toBeInTheDocument()

    fireEvent.contextMenu(gridCells[0])
    expect(screen.queryByAltText('Flag')).not.toBeInTheDocument()
  })
})
