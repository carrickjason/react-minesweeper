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
    <div className="text-center p-4">
      <embed
        src="https://retro.sx/bank/9b/9bb358d54d7a76412e68c5fb0011b56a.mp3"
        loop
        autostart="true"
        width="2"
        height="0"
      />
      <Header />
      {content}
    </div>
  )
}

export default App
