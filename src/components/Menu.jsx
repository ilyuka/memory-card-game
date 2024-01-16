import React from "react";
import { ChooseDifficultyMenu } from "./menus/ChooseDifficultyMenu";
import { LoseMenu } from "./menus/LoseMenu";
import { WinMenu } from "./menus/WinMenu";

function Menu({
  gameStatus,
  setGameStatus,
  difficulty,
  setDifficulty,
  score,
  setScore,
  bestScore,
}) {
  let menuBody = (
    <div>
      <p>something went wrong...</p>
      <button
        type="button"
        onClick={() => {
          setDifficulty(4);
          setGameStatus("playing");
        }}
      >
        restart
      </button>
    </div>
  );

  if (gameStatus === "choosingDifficulty") {
    menuBody = (
      <ChooseDifficultyMenu
        difficulty={difficulty}
        setDifficulty={setDifficulty}
        setGameStatus={setGameStatus}
      />
    );
  }
  if (gameStatus === "lost") {
    menuBody = (
      <LoseMenu
        score={score}
        bestScore={bestScore}
        setGameStatus={setGameStatus}
      />
    );
  }
  if (gameStatus === "won") {
    menuBody = (
      <WinMenu
        score={score}
        bestScore={bestScore}
        setGameStatus={setGameStatus}
        difficulty={difficulty}
        setDifficulty={setDifficulty}
      />
    );
  }
  return (
    <div className="absolute left-2/4 top-2/4 min-w-96 -translate-x-2/4 -translate-y-2/4 rounded-lg border-2 border-solid border-violet-600 bg-gray-800 p-8 text-white">
      {menuBody}
    </div>
  );
}

export { Menu };
