import React from 'react';
import Scoreboard from "./Scoreboard";
import Board from "./Board";

const getStatusMessage = ({gameLost, gameWon})=>{
    return gameLost ? 'You lost!' : gameWon ? 'You won!' : 'Have fun!';
}

function getRestartButton(state, dispatch) {
    let restartButton = '';
    if (state.gameOver) {
        restartButton = (
            <button onClick={() => dispatch({type: 'restartGame'})}>New Game</button>
        );
    }
    return restartButton;
}

function GameChrome({state, dispatch}) {
    const statusMessage = getStatusMessage(state);
    let restartButton = getRestartButton(state, dispatch);

    return (
        <div>
            <Scoreboard delay={state.gameTimerDelay}
                        numRemainingFlags={state.numRemainingFlags}>
                <span>{statusMessage}</span>
            </Scoreboard>
            <Board {...state} dispatch={dispatch}/>
            {restartButton}
        </div>
    );
}

export default GameChrome;
