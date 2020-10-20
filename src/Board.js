import React from 'react';
import Cell from './Cell';
import styles from './styles.js';

function renderRow(gameGrid, rowIndex, gameLost, dispatch) {
    const cols = [];
    for (let y = 0; y < gameGrid[rowIndex].length; ++y) {
        let cellContents = gameGrid[rowIndex][y].mineCounts || '';
        if (gameGrid[rowIndex][y].hasMine) {
            cellContents = (gameLost) ? '💥' : '🔻';
        }
        cols.push((
            <Cell
                isSwept={gameLost || gameGrid[rowIndex][y].isSwept}
                isFlagged={gameGrid[rowIndex][y].isFlagged}
                clickHandler={(e) => {e.stopPropagation(); dispatch({type: 'sweepCell', payload: {x: rowIndex, y, shiftKey: e.shiftKey}})}}
                key={'cell_' + y}
            >
                {cellContents}
            </Cell>
        ));
    }

    return (
        <section style={styles.row} key={'row_' + rowIndex}>
            {cols}
        </section>
    );
}

function Board({gameGrid, gameOver, gameWon, dispatch, children}) {
    const gameLost = gameOver && !gameWon;

    if (gameGrid === null) {
        return <div/>;
    }

    let rows = [];
    for (let x = 0; x < gameGrid.length; ++x) {
        rows.push(renderRow(gameGrid, x, gameLost, dispatch));
    }

    return (
        <div>
            <main style={styles.board}>
                {rows}
            </main>
        </div>
    );
}

// var OldBoard = React.createClass({
//     mixins: [Reflux.ListenerMixin],
//
//     getInitialState() {
//         return Store.getInitialState();
//     },
//
//     componentDidMount() {
//         this.listenTo(Store, this.onStoreUpdate);
//     },
//
//     onStoreUpdate(newStoreState) {
//         this.setState(newStoreState, () => {
//             this.isGameOver()
//         });
//     },
//
//     isGameOver() {
//         let gameLost = this.isGameLost();
//         let gameWon = !gameLost && this.didWeWin();
//
//         let gameOver = false;
//         if (gameLost || gameWon) {
//             gameOver = true;
//             Actions.stopTimer();
//         }
//
//         this.setState({
//             gameOver,
//             gameWon
//         });
//     },
//
//     handleClickLocation(x, y, e) {
//         if (this.state.gameOver) {
//             return;
//         }
//         if (this.state.gameTimer === 0) {
//             Actions.startTimer();
//         }
//
//         let cell = this.state.gameGrid[x][y];
//         if (e.shiftKey) {
//             Actions.toggleFlag(x, y);
//         } else if (!cell.isFlagged) {
//             Actions.sweepLocation(x, y);
//         }
//     },
//
//
//     didWeWin() {
//         let sweptSpaces = this.state.gameGrid.reduce((count, row) => {
//             return count + row.reduce((initCount, cell) => {
//                 if (cell.isSwept) {
//                     initCount++;
//                 }
//                 return initCount;
//             }, 0);
//         }, 0);
//
//         let totalSpaces = this.state.width * this.state.height;
//         return sweptSpaces === totalSpaces - this.state.numMines;
//     },
//
//     renderRow(rowIndex) {
//         let gameLost = this.state.gameOver && !this.state.gameWon;
//         var cols = [];
//         let {gameGrid} = this.state;
//         for (let x = 0; x < gameGrid[rowIndex].length; ++x) {
//             let mineCounts = gameGrid[rowIndex][x].mineCounts || '';
//
//             let cellContents = mineCounts;
//             if (gameGrid[rowIndex][x].hasMine) {
//                 cellContents = (gameLost) ? '💥' : '🔻';
//             }
//             cols.push((
//                 <Cell
//                     isSwept={this.state.gameOver || gameGrid[rowIndex][x].isSwept}
//                     isFlagged={gameGrid[rowIndex][x].isFlagged}
//                     clickHandler={(e) => this.handleClickLocation(rowIndex, x, e)}
//                     key={'cell_' + x}
//                 >
//                     {cellContents}
//                 </Cell>
//             ));
//         }
//
//         return (
//             <section style={styles.row} key={'row_' + rowIndex}>
//                 {cols}
//             </section>
//         );
//     },
//
//     render() {
//         if (this.state.gameGrid === null) {
//             return <div></div>;
//         }
//
//         let gameLost = this.state.gameOver && !this.state.gameWon;
//         let statusMessage = (<span>Have fun</span>);
//
//         if (gameLost) {
//             statusMessage = (
//                 <span>You lost!</span>
//             );
//         } else if (this.state.gameWon) {
//             statusMessage = (
//                 <span>You won!</span>
//             );
//         }
//
//         let rows = [];
//         for (let x = 0; x < this.state.gameGrid.length; ++x) {
//             rows.push(this.renderRow(x));
//         }
//
//         let restartButton = '';
//         if (this.state.gameOver) {
//             restartButton = (
//                 <button onClick={Actions.restartGame}>New Game</button>
//             );
//         }
//
//         return (
//             <div>
//                 <Scoreboard>
//                     {statusMessage}
//                 </Scoreboard>
//                 <main style={styles.board}>
//                     {rows}
//                 </main>
//                 {restartButton}
//             </div>
//         );
//     }
// });

export default Board;
