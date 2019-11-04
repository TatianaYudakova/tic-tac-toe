# Tic Tac Toe

## Task

Implement TicTacToe class.

#### Methods

`getCurrentPlayerSymbol()`
should return x or o

`nextTurn(row, col)`
should properly update class state (change current player, update marks storage etc.)

`isFinished()`
should return true if game is finished (e.g. there is a winner or it is a draw)

`getWinner()`
should return winner symbol (x or o) or null if there is no winner yet

`noMoreTurns()`
should return true if there is no more fields to place a x or o

`isDraw()`
should return true if there is no more turns and no winner

`getFieldValue(row, col)`
should return matrix[row][col] value (if any) or null

## Prepare and test
1. Install [Node.js](https://nodejs.org/en/download/)   
2. Clone this repository: https://github.com/TatianaYudakova/tic-tac-toe/  
3. Go to folder `tic-tac-toe`  
4. To install all dependencies use [`npm install`](https://docs.npmjs.com/cli/install)  
5. Run npm test in command line  
6. You will see the number of passing and failing tests
