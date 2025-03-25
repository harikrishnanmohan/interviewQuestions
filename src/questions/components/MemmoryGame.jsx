import { useEffect, useState } from "react";

const MemmoryGame = () => {
  const [board, setBoard] = useState([]);
  const [dimemsion, setDimension] = useState(2);
  const [revealed, setRevealed] = useState([]);
  const [isFlipped, setIsFlipped] = useState([]);

  const initializeBoard = () => {
    const totalCards = dimemsion * dimemsion;
    const pairCount = Math.floor(totalCards / 2);
    const arr = [
      ...Array(pairCount)
        .keys()
        .map((item) => item + 1),
    ];
    const mixedArray = [...arr, ...arr]
      .sort(() => Math.random() - 0.5)
      // .slice(0, totalCards)
      .map((item, index) => ({ id: index, value: item }));
    setBoard(mixedArray);
    setRevealed([]);
    setIsFlipped([]);
  };

  useEffect(() => {
    initializeBoard();
  }, [dimemsion]);

  const onChangeRow = (e) => {
    if (e.target.value >= 2 && e.target.value <= 10)
      setDimension(parseInt(e.target.value));
  };

  const onClickCell = (id) => {
    if (isFlipped.length === 0) setIsFlipped([id]);
    if (isFlipped.length === 1 && id !== isFlipped[0]) {
      setIsFlipped((prev) => [...prev, id]);
      if (!checkMatching(id)) {
        setTimeout(() => {
          setIsFlipped([]);
        }, 1000);
      }
    }
  };

  const checkIsFliped = (id) => isFlipped.includes(id);

  const checkMatching = (id) => {
    if (board[isFlipped[0]].value === board[id].value) {
      setRevealed((prev) => [...prev, isFlipped[0], id]);
      setIsFlipped([]);
      return true;
    }
    return false;
  };

  return (
    <div className="memmory__game">
      <h1>Memmory Game</h1>
      <div className="memmory__game_top">
        <label>Rows</label>
        <input
          type="number"
          min={2}
          max={10}
          onChange={onChangeRow}
          value={dimemsion}
          step={2}
          className="memmory__game_input"
        />
      </div>
      <div
        className="board"
        style={{ gridTemplateColumns: `repeat(${dimemsion},1fr)` }}
      >
        {board.map((item) => (
          <div
            key={item.id}
            className={`board__cell ${
              checkIsFliped(item.id) ? `flipped ` : ""
            } ${revealed.includes(item.id) ? "reveiled" : ""}`}
            onClick={() => onClickCell(item.id)}
          >
            {checkIsFliped(item.id) || revealed.includes(item.id)
              ? item.value
              : "?"}
          </div>
        ))}
      </div>
      <div className="game__message">
        <p>
          {revealed.length === dimemsion * dimemsion
            ? "You won"
            : "Select a cell"}
        </p>
        <button onClick={initializeBoard}>
          {revealed.length === dimemsion * dimemsion ? "New game" : "Reset"}
        </button>
      </div>
    </div>
  );
};

export default MemmoryGame;
