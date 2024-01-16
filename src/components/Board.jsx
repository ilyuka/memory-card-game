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
  setGameStatus,
}) {
  useEffect(() => {
    setScore(0);
    setSelectedIds(new Set());
    console.log("useEffect inside board");
  }, []);
  return (
    <div className="absolute left-2/4 top-2/4 max-h-full w-4/5 -translate-x-2/4 -translate-y-2/4">
      <Score score={score} bestScore={bestScore} difficulty={difficulty} />
      <div className="flex flex-wrap justify-center gap-8">
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
          />
        ))}
      </div>
    </div>
  );
}

export { Board };
