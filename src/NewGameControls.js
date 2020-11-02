import React, { useRef } from 'react'

const NewGameControls = ({ width, height, numMines, dispatch }) => {
  const widthEl = useRef(null)
  const heightEl = useRef(null)
  const numMinesEl = useRef(null)
  return (
    <div>
      <form
        onSubmit={e => {
          dispatch({
            type: 'startGame',
            payload: {
              width: widthEl.current.value,
              height: heightEl.current.value,
              numMines: numMinesEl.current.value,
            },
          })
          e.preventDefault()
        }}
      >
        <p>
          <label>
            Width:{' '}
            <input
              type="number"
              defaultValue={width}
              min="1"
              max="20"
              ref={widthEl}
            />
          </label>{' '}
          <label>
            Height:{' '}
            <input
              type="number"
              defaultValue={height}
              min="1"
              max="20"
              ref={heightEl}
            />
          </label>
          <label>
            {' '}
            Num Mines:{' '}
            <input
              type="number"
              defaultValue={numMines}
              min="1"
              max="50"
              ref={numMinesEl}
            />
          </label>{' '}
          <input type="submit" value="Start" />
        </p>
      </form>
    </div>
  )
}

export default NewGameControls
