import React from 'react'

import { FormNumberInput } from './FormNumberInput'
import { FormInput } from './FormInput'
import { Button } from './Button'
import {
  START_GAME,
  START_GAME_FROM_UUID,
  UPDATE_GAME_SETUP_VALUE,
} from './actions/constants'

const NewGameControls = ({ width, height, numMines, uuid, dispatch }) => {
  const maxNumMines = width * height - 1
  const changeHandler = e => {
    const { name, value } = e.target
    dispatch({
      type: UPDATE_GAME_SETUP_VALUE,
      payload: {
        [name]: value,
      },
    })
  }

  return (
    <div className="w-1/2 m-auto">
      <form
        className="shadow-md rounded px-8 pt-6 pb-8 mb-8 bg-white"
        onSubmit={e => {
          e.preventDefault()
          dispatch({
            type: START_GAME,
          })
        }}
      >
        <FormNumberInput
          label="Number of Columns:"
          id="width"
          min={2}
          max={20}
          onChange={changeHandler}
          value={width}
          name="width"
          required
        />
        <FormNumberInput
          label="Number of Rows:"
          id="height"
          min={2}
          max={20}
          onChange={changeHandler}
          value={height}
          name="height"
          required
        />
        <FormNumberInput
          label="Number of Mines:"
          id="numMines"
          min={1}
          max={maxNumMines}
          onChange={changeHandler}
          value={numMines}
          name="numMines"
          required
        />
        <Button type="submit">Create New Game</Button>
      </form>
      OR
      <form
        onSubmit={e => {
          e.preventDefault()
          dispatch({ type: START_GAME_FROM_UUID })
        }}
        className="shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-white mt-8"
      >
        <FormInput
          label="Enter a UUID:"
          id="uuid"
          name="uuid"
          value={uuid}
          onChange={changeHandler}
          required
        />
        <Button type="submit">Start Game</Button>
      </form>
    </div>
  )
}

export default NewGameControls
