import React, { useEffect } from "react";
import { Card } from "./Card.jsx";
import { Score } from "./Score.jsx";

function Board({
  difficulty,
  gameArr,
  setGameArr,
  selectedIds,
  setSelectedIds,
  score,
  setScore,
  bestScore,
  setBestScore,
  gameStatus,
  setGameStatus,
  boardScore,
  setBoardScore,
}) {
  useEffect(() => {
    setSelectedIds(new Set());
    setBoardScore(0);
    console.log("useEffect inside board");
  }, []);
  return (
    <div className="flex min-h-screen w-4/5 flex-col p-4">
      <Score
        score={score}
        bestScore={bestScore}
        difficulty={difficulty}
        boardScore={boardScore}
      />
      <div className="flex flex-grow flex-wrap content-center items-center justify-center gap-8">
        {gameArr.map((card) => (
          <Card
            key={card.id}
            difficulty={difficulty}
            card={card}
            setGameArr={setGameArr}
            selectedIds={selectedIds}
            setSelectedIds={setSelectedIds}
            score={score}
            setScore={setScore}
            bestScore={bestScore}
            setBestScore={setBestScore}
            setGameStatus={setGameStatus}
            boardScore={boardScore}
            setBoardScore={setBoardScore}
          />
        ))}
      </div>
    </div>
  );
}

export { Board };
