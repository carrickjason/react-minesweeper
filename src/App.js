import React, { useReducer } from 'react'
import { boardReducer, initialState } from './store'
import NewGameControls from './NewGameControls'
import GameChrome from './GameChrome'

function App() {
  const [state, dispatch] = useReducer(boardReducer, initialState)

  const content = state.gameStarted ? (
    <GameChrome state={state} dispatch={dispatch}></GameChrome>
  ) : (
    <NewGameControls {...state} dispatch={dispatch}></NewGameControls>
  )

  return <main className="text-center p-4">{content}</main>
}

export default App
