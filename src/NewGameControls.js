import React, { useRef } from 'react'

import { START_GAME } from './actions/constants'

const NewGameControls = ({ width, height, numMines, dispatch }) => {
  const widthEl = useRef(null)
  const heightEl = useRef(null)
  const numMinesEl = useRef(null)

  return (
    <div>
      <form
        className="w-1/4 m-auto"
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
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="width"
            >
              Width:
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              id="width"
              type="number"
              defaultValue={width}
              min="1"
              max="20"
              ref={widthEl}
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="height"
            >
              Height:
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              id="height"
              type="number"
              defaultValue={height}
              min="1"
              max="20"
              ref={heightEl}
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="numMines"
            >
              Number of mines:
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              id="numMines"
              type="number"
              defaultValue={numMines}
              min="1"
              max="50"
              ref={numMinesEl}
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            />
          </div>
        </div>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Start
        </button>
      </form>
    </div>
  )
}

export default NewGameControls
