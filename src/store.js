import { makeGameGrid } from './util/makeGameGrid.js'
import { getNumberRemainingFlags } from './util/getNumberRemainingFlags.js'
import { toggleFlag } from './util/toggleFlag.js'
import { sweepLocation } from './util/sweepLocation.js'
import { isGameLost } from './util/isGameLost.js'
import { isGameWon } from './util/isGameWon.js'

const initialState = {
    gameGrid: null,
    gameStarted: false,
    height: 10,
    width: 10,
    numMines: 1,
    numRemainingFlags: 0,
    gameTimerDelay: null,
    gameOver: false,
    gameWon: false,
    gameLost: false,
};

function boardReducer(state, action) {
    switch (action.type) {
        case 'restartGame':
            return Object.assign({}, state, {gameStarted: false});
        case 'startGame':
            const gameGrid = makeGameGrid(action.payload);
            const numRemainingFlags = getNumberRemainingFlags(gameGrid, action.payload.numMines);
            return Object.assign({}, initialState, action.payload, {gameStarted: true, gameGrid, numRemainingFlags});
        case 'sweepCell':
            const {x, y, shiftKey} = action.payload;
            let gameTimerDelay = 1000;
            if (shiftKey) {
                const updatedGrid = toggleFlag(state.gameGrid, x, y);
                return Object.assign({}, state, {gameGrid: updatedGrid, numRemainingFlags: getNumberRemainingFlags(updatedGrid, state.numMines), gameTimerDelay})
            } else {
                const updatedGrid = sweepLocation(state.gameGrid, x, y);
                const gameLost = isGameLost(updatedGrid);
                const gameWon = isGameWon(updatedGrid, state.numMines);
                const gameOver = gameLost || gameWon;
                if (gameOver) {
                    gameTimerDelay = null;
                }
                return Object.assign({}, state, {gameGrid: updatedGrid, gameOver, gameLost, gameWon, gameTimerDelay})
            }
        case 'stopTimer':
            return Object.assign({}, state, {gameTimerComponent: null});
        default:
            return state;
    }
}

export {boardReducer, initialState};
