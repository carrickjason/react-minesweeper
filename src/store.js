function makeGameGrid({height = 10, width = 10, numMines = 5}) {
    let grid = [];
    for (let x = 0; x < height; ++x) {
        grid.push([]);
        for (let y = 0; y < width; ++y) {
            grid[x].push({
                hasMine: false,
                isSwept: false,
                mineCounts: 0,
                isFlagged: false
            });
        }
    }

    addMines(grid, Math.min(numMines, height * width));
    setMineCounts(grid);
    return grid;
}

function addMines(grid, minesToAdd) {
    const height = grid.length;
    const width = grid[0].length;
    while (minesToAdd) {
        let x = getRandomNumber(0, height)
        let y = getRandomNumber(0, width);

        if (!grid[x][y].hasMine) {
            grid[x][y].hasMine = true;
            minesToAdd--;
        }
    }
}

function setMineCounts(grid) {
    const height = grid.length;
    const width = grid[0].length;
    for (let x = 0; x < height; ++x) {
        for (let y = 0; y < width; ++y) {
            if (grid[x][y].hasMine) {
                let updatePositions = getNeighbors(grid, x, y);
                updatePositions.forEach((position) => {
                    grid[position[0]][position[1]].mineCounts++;
                });
            }
        }
    }
}

function getNeighbors(gameGrid, x, y) {
    let positions = [];
    const height = gameGrid.length;
    const width = gameGrid[0].length;

    //get all possible coordinates
    [1, 0, -1].forEach((xMod) => {
        [1, 0, -1].forEach((yMod) => {
            positions.push([x + xMod, y + yMod]);
        })
    });

    //remove coordinates outside of grid
    return positions.filter((position) => {
        return position[0] >= 0 && position[0] < height
            && position[1] >= 0 && position[1] < width;
    });
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function sweepLocation(gameGrid, x, y) {
    gameGrid[x][y].isSwept = true;

    if (gameGrid[x][y].mineCounts === 0) {
        gameGrid = sweepNeighbors(gameGrid, x, y);
    }
    return gameGrid;
}

function sweepNeighbors(gameGrid, x, y) {
    let neighbors = getNeighbors(gameGrid, x, y);

    neighbors.forEach((neighbor) => {
        let [neighborX, neighborY] = neighbor;
        let neighborCell = gameGrid[neighborX][neighborY]
        if (!neighborCell.hasMine
            && neighborCell.isSwept !== true
            && neighborCell.isFlagged !== true
        ) {
            sweepLocation(gameGrid, neighborX, neighborY);
        }
    })
    return gameGrid;
}

function toggleFlag(gameGrid, x, y) {
    return Object.assign([],
        [...gameGrid],{
            [x]: Object.assign([],[...gameGrid][x],{
                [y]: Object.assign([],[...gameGrid][x][y],{
                    isFlagged: !gameGrid[x][y].isFlagged
                })
            })
        }
    );
}

function getNumberRemainingFlags(gameGrid,numMines) {
    let flaggedSpaces = gameGrid.reduce((count, row) => {
        return count + row.reduce((initCount, cell) => {
            if (cell.isFlagged) {
                initCount++;
            }
            return initCount;
        }, 0);
    }, 0);

    console.log(numMines, flaggedSpaces);
    return numMines - flaggedSpaces;
}


function isGameLost(gameGrid) {
    for (let x = 0; x < gameGrid.length; ++x) {
        for (let y = 0; y < gameGrid[x].length; ++y) {
            if (gameGrid[x][y].isSwept && gameGrid[x][y].hasMine) {
                return true;
            }
        }
    }
    return false;
}

function isGameWon(gameGrid, numMines) {
    const width = gameGrid.length;
    const height = gameGrid[0].length;
    let sweptSpaces = gameGrid.reduce((count, row) => {
        return count + row.reduce((initCount, cell) => {
            if (cell.isSwept) {
                initCount++;
            }
            return initCount;
        }, 0);
    }, 0);

    let totalSpaces = width * height;
    return sweptSpaces === totalSpaces - numMines;
}

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
