import React from "react";
import GameStatusButton from "../utils/GameStatusButton";

function ChooseDifficultyMenu({
  difficulty,
  setDifficulty,
  setGameStatus,
  setScore,
}) {
  return (
    <div className="flex flex-col items-center gap-4">
      <p className="mb-6 text-3xl">Memory Card Game!</p>
      <p className="text-sm italic">Choose your difficulty...</p>
      <button
        className={
          difficulty === 4 ? "text-lime-300 transition-all" : "hover:opacity-75"
        }
        type="button"
        onClick={() => setDifficulty(4)}
      >
        easy (4)
      </button>
      <button
        className={
          difficulty === 8 ? "text-lime-300 transition-all" : "hover:opacity-75"
        }
        type="button"
        onClick={() => setDifficulty(8)}
      >
        medium (8)
      </button>
      <button
        className={
          difficulty === 16
            ? "text-lime-300 transition-all"
            : "hover:opacity-75"
        }
        type="button"
        onClick={() => setDifficulty(16)}
      >
        hard (16)
      </button>
      <GameStatusButton
        text="Start"
        onClickMethod={() => {
          setScore(0);
          setGameStatus("playing");
        }}
      />
    </div>
  );
}

export { ChooseDifficultyMenu };
