import React from "react";
import GameStatusButton from "../utils/GameStatusButton";

function WinMenu({
  score,
  bestScore,
  setGameStatus,
  difficulty,
  setDifficulty,
}) {
  function keepPlaying() {
    if (difficulty !== 16) {
      const newDifficulty = difficulty * 2;
      setDifficulty(newDifficulty);
    }
    setGameStatus("playing");
  }
  return (
    <div className="flex flex-col items-center">
      <h1 className="mb-6 text-3xl">You Won!</h1>
      <p>Your Score: {score}</p>
      <p>Your Best: {bestScore}</p>
      <div className="mt-6 flex flex-col items-center">
        <GameStatusButton
          text="Keep Playing"
          onClickMethod={() => keepPlaying()}
        />
        <GameStatusButton
          text="Restart"
          onClickMethod={() => setGameStatus("playing")}
        />
        <GameStatusButton
          text="Change difficulty"
          onClickMethod={() => setGameStatus("choosingDifficulty")}
        />
      </div>
    </div>
  );
}

export { WinMenu };
