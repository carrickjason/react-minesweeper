import React, {useReducer} from 'react';
import './App.css';
import {boardReducer, initialState} from "./store";
import NewGameControls from "./NewGameControls";
import GameChrome from "./GameChrome";

function App() {
   const [state, dispatch] = useReducer(boardReducer, initialState);

   const content = state.gameStarted ?
       <GameChrome state={state} dispatch={dispatch}></GameChrome>
       :
       <NewGameControls {...state} dispatch={dispatch}></NewGameControls>

    return (
    <div className="App">
        {content}
    </div>
  );
}

export default App;
