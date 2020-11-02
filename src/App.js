import React, { useReducer } from 'react'
import './App.css'
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
    <div className="App">
      <Header />
      {content}
    </div>
  )
}

export default App
