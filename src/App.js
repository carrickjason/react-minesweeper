import React, {useReducer} from 'react';
import './App.css';
import {boardReducer, initialState} from "./store";
import NewGameControls from "./NewGameControls";
import GameChrome from "./GameChrome";



// var App = React.createClass({
//     mixins: [Reflux.connect(Store)],
//
//     startNewGame(e) {
//         e.preventDefault();
//
//         let width = parseInt(React.findDOMNode(this.refs.width).value);
//         let height = parseInt(React.findDOMNode(this.refs.height).value);
//         let numMines = parseInt(React.findDOMNode(this.refs.numMines).value);
//
//         Actions.startGame(width, height, numMines);
//     },
//
//     render() {
//         if (!this.state.gameStarted) {
//             return this.renderNewGameControls();
//         } else {
//             return this.renderBoard();
//         }
//     },
//
//     renderNewGameControls() {
//         return (
//             <div>
//                 <form onSubmit={this.startNewGame}>
//                     <p>
//                         <label>
//                             Width:{' '}
//                             <input type="number" defaultValue={this.state.width} min="1" max="20" ref="width" />
//                         </label>{' '}
//                         <label>
//                             Height:{' '}
//                             <input type="number" defaultValue={this.state.height} min="1" max="20" ref="height" />
//                         </label>
//                         <label>{' '}
//                             Num Mines:{' '}
//                             <input type="number" defaultValue={this.state.numMines} min="1" max="50" ref="numMines" />
//                         </label>{' '}
//                         <input type="submit" value="Start" />
//                     </p>
//                 </form>
//             </div>
//         );
//     },
//
//     renderBoard() {
//         return (
//             <div>
//                 <Board />
//             </div>
//         );
//     }
// });

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
