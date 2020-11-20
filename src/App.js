import React, { useReducer } from 'react'
import { boardReducer, initialState } from './store'
import NewGameControls from './NewGameControls'
import GameChrome from './GameChrome'
import { Header } from './Header'

function App() {
  const [state, dispatch] = useReducer(boardReducer, initialState)

  const content = state.gameStarted ? (
    <GameChrome state={state} dispatch={dispatch}></GameChrome>
  ) : (
    <NewGameControls {...state} dispatch={dispatch}></NewGameControls>
  )

  return (
    <main className="text-center p-4">
      <Header gameStarted={state.gameStarted} />
      {content}
    </main>
  )
}

export default App
