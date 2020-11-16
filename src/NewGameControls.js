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
        className="px-8 pt-6 pb-8 mb-8"
        onSubmit={e => {
          e.preventDefault()
          dispatch({
            type: START_GAME,
          })
        }}
      >
        <div className="flex text-center m-auto justify-around mb-8">
          <FormNumberInput
            label="Columns"
            id="width"
            min={2}
            max={20}
            onChange={changeHandler}
            value={width}
            name="width"
            required
          />
          <FormNumberInput
            label="Rows"
            id="height"
            min={2}
            max={20}
            onChange={changeHandler}
            value={height}
            name="height"
            required
          />
          <FormNumberInput
            label="Mines"
            id="numMines"
            min={1}
            max={maxNumMines}
            onChange={changeHandler}
            value={numMines}
            name="numMines"
            required
          />
        </div>
        <Button type="submit">Create New Game</Button>
      </form>
      <form
        onSubmit={e => {
          e.preventDefault()
          dispatch({ type: START_GAME_FROM_UUID })
        }}
        className="px-8 pt-6 pb-8 mb-4 mt-8"
      >
        <FormInput
          label="Or enter a UUID"
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
