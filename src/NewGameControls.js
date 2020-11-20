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
    <>
      <div className="lg:w-1/2 m-auto w-auto">
        <form
          className="px-8 pt-6 pb-8 mb-8"
          onSubmit={e => {
            e.preventDefault()
            dispatch({
              type: START_GAME,
            })
          }}
        >
          <fieldset>
            <legend className="sr-only">Minesweeper Game Controls</legend>

            <div className="flex text-center m-auto justify-around mb-12 flex-col xs:flex-row items-center">
              <FormNumberInput
                label="Columns"
                id="width"
                min={2}
                max={20}
                onChange={changeHandler}
                value={width}
                name="width"
                required
                additionalContainerClasses="xs:w-10 w-full"
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
                additionalContainerClasses="xs:w-10 w-full"
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
                additionalContainerClasses="xs:w-10 w-full"
              />
            </div>
          </fieldset>
          <Button type="submit">Play</Button>
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
          <Button
            type="submit"
            buttonStyle="secondary"
            additionalClasses="mt-8"
          >
            Start
          </Button>
        </form>
      </div>
    </>
  )
}

export default NewGameControls
