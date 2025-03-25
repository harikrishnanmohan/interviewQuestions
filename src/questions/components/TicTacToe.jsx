import { useState } from "react";

const winningCombination = [
  [0, 1, 2],
  [0, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [2, 4, 8],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
];
const TicTacToe = () => {
  const [gameBoard, setGameBoard] = useState(Array(9).fill(null));
  const [isNextX, setIsNextX] = useState(true);

  const onCheckWinnner = () => {
    for (let i = 0; i < winningCombination.length; i++) {
      const [a, b, c] = winningCombination[i];
      if (
        gameBoard[a] &&
        gameBoard[a] === gameBoard[b] &&
        gameBoard[a] === gameBoard[c]
      ) {
        return true;
      }
    }
  };
  const onClickCell = (index) => {
    setGameBoard((prevBoard) => {
      if (gameBoard[index] || onCheckWinnner()) return prevBoard;
      const newBoard = [...prevBoard];
      newBoard[index] = isNextX ? "X" : "O";
      setIsNextX(!isNextX);
      return newBoard;
    });
  };

  const onReset = () => {
    setGameBoard(Array(9).fill(null));
    setIsNextX(true);
  };

  return (
    <div>
      <div className="game__info">
        {onCheckWinnner() ? (
          <span>Player {isNextX ? "O" : "X"} Wins</span>
        ) : (
          <span>Next player is {isNextX ? "X" : "O"}</span>
        )}
        <button onClick={onReset}>Reset</button>
      </div>
      <div className="game__board">
        {gameBoard.map((item, index) => (
          <button
            key={index}
            className="cell"
            onClick={() => onClickCell(index)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TicTacToe;
