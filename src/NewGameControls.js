import React, { useRef } from 'react'

import { FormNumberInput } from './FormNumberInput'
import { FormInput } from './FormInput'
import { START_GAME } from './actions/constants'
import Prando from 'prando'

const NewGameControls = ({ width, height, numMines, dispatch }) => {
  const widthEl = useRef(null)
  const heightEl = useRef(null)
  const numMinesEl = useRef(null)
  const uuidEl = useRef(null)

  return (
    <div className="w-1/2 m-auto">
      <form
        className="shadow-md rounded px-8 pt-6 pb-8 mb-8 bg-white"
        onSubmit={e => {
          dispatch({
            type: START_GAME,
            payload: {
              width: widthEl.current.value,
              height: heightEl.current.value,
              numMines: numMinesEl.current.value,
            },
          })
          e.preventDefault()
        }}
      >
        <FormNumberInput
          label="Number of Columns:"
          id="width"
          min={1}
          max={20}
          ref={widthEl}
          value={width}
        />
        <FormNumberInput
          label="Number of Rows:"
          id="height"
          min={1}
          max={20}
          ref={heightEl}
          value={height}
        />
        <FormNumberInput
          label="Number of Mines:"
          id="numMines"
          min={1}
          max={50}
          ref={numMinesEl}
          value={numMines}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Create New Game
        </button>
      </form>
      OR
      <form
        onSubmit={e => {
          let prando = new Prando(uuidEl.current.value)
          dispatch({
            type: START_GAME,
            payload: {
              width: prando.nextInt(1, 20),
              height: prando.nextInt(1, 20),
              numMines: prando.nextInt(1, 50),
              uuid: uuidEl.current.value,
            },
          })
          e.preventDefault()
        }}
        className="shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-white mt-8"
      >
        <FormInput label="Enter a UUID:" id="uuid" ref={uuidEl} />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Start Game
        </button>
      </form>
    </div>
  )
}

export default NewGameControls
