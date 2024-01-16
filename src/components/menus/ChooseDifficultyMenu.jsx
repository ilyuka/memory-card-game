import React from "react";

function ChooseDifficultyMenu({ difficulty, setDifficulty, setGameStatus }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <p className="mb-6 text-3xl">Memory card game!</p>
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
      <button
        type="button"
        className="mt-5 max-w-min rounded-xl border border-solid border-lime-300 px-6 py-2 font-bold text-lime-300 hover:opacity-75"
        onClick={() => setGameStatus("playing")}
      >
        START
      </button>
    </div>
  );
}

export { ChooseDifficultyMenu };
