document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementsByClassName('box');
    const cells = document.querySelectorAll('.input');
    let currentPlayer = 'X';
    let gameBoard = ['', '', '', '', '', '', '', '', ''];
    let gameActive = true;

    const checkWinner = () => {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]              // Diagonals
        ];

        for (const combo of winningCombinations) {
            const [a, b, c] = combo;
            if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
                return gameBoard[a];
            }
        }

        return null;
    };

    const handleCellClick = (index) => {
        if (!gameBoard[index] && gameActive) {
            gameBoard[index] = currentPlayer;
            cells[index].textContent = currentPlayer;

            const winner = checkWinner();
            if (winner) {
                alert(`Player ${winner} wins!`);
                gameActive = false;
            } else if (!gameBoard.includes('')) {
                alert('It\'s a draw!');
                gameActive = false;
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }
    };

    cells.forEach((cell, index) => {
        cell.addEventListener('click', () => handleCellClick(index));
    });
});


