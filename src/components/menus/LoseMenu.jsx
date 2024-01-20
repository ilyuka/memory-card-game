import React from "react";
import GameStatusButton from "../utils/GameStatusButton";

function LoseMenu({ score, bestScore, setGameStatus, setScore }) {
  return (
    <div className="flex flex-col items-center">
      <h1 className="mb-6 text-3xl">You Lost!</h1>
      <p>Your Score: {score}</p>
      <p>Your Best: {bestScore}</p>
      <div className="mt-6 flex flex-col items-center">
        <GameStatusButton
          text="Restart"
          onClickMethod={() => {
            setGameStatus("playing");
            setScore(0);
          }}
        />
        <GameStatusButton
          text="Change difficulty"
          onClickMethod={() => {
            setGameStatus("choosingDifficulty");
          }}
        />
      </div>
    </div>
  );
}

export { LoseMenu };
