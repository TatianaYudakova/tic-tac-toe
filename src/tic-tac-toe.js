class TicTacToe {
    constructor() {
        this.matrix = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];
        this.currentPlayerSymbol = 'x';
        this.winner = null;

    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {

        if (this.getFieldValue(rowIndex, columnIndex) === null) {
            this.matrix[rowIndex][columnIndex] = this.currentPlayerSymbol;
            this.currentPlayerSymbol = this.currentPlayerSymbol === 'x' ? 'o' : 'x';
        }

        this.findWinner();
    }

    findWinner() {
        if (this.matrix[0][0] !== 0) {
            if (this.matrix[0][0] === this.matrix[0][1] && this.matrix[0][0] === this.matrix[0][2]
                || this.matrix[0][0] === this.matrix[1][0] && this.matrix[0][0] === this.matrix[2][0]) {
                this.winner = this.matrix[0][0];
            }
        }

        if (this.matrix[1][1] !== 0) {
            if (this.matrix[0][1] === this.matrix[1][1]  && this.matrix[1][1] === this.matrix[2][1]
                || this.matrix[1][0] === this.matrix[1][1] && this.matrix[1][1] === this.matrix[1][2]
                || this.matrix[0][0] === this.matrix[1][1] && this.matrix[1][1] === this.matrix[2][2]
                || this.matrix[0][2] === this.matrix[1][1] && this.matrix[1][1] === this.matrix[2][0]) {
                this.winner = this.matrix[1][1];
            }
        }

        if (this.matrix[2][2] !== 0) {
            if (this.matrix[0][2] === this.matrix[2][2] && this.matrix[1][2] === this.matrix[2][2]
                || this.matrix[2][0] === this.matrix[2][2] && this.matrix[2][1] === this.matrix[2][2]) {
                this.winner = this.matrix[2][2];
            }
        }
    }

    isFinished() {
        return this.noMoreTurns() || this.winner !== null;
    }

    getWinner() {
        return this.winner;
    }

    noMoreTurns() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.matrix[i][j] === 0) {
                    return false
                }
            }
        }
        return true;
    }

    isDraw() {
        return this.noMoreTurns() && this.winner === null;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex] !== 0 ? this.matrix[rowIndex][colIndex] : null;
    }
}

module.exports = TicTacToe;
