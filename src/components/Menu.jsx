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
    if (gameStatus === "choosingDifficulty") {
        return (
            <ChooseDifficultyMenu
                difficulty={difficulty}
                setDifficulty={setDifficulty}
                setGameStatus={setGameStatus}
            />
        );
    }
    if (gameStatus === "lost") {
        return (
            <LoseMenu
                score={score}
                bestScore={bestScore}
                setGameStatus={setGameStatus}
            />
        );
    }
    if (gameStatus === "won") {
        return (
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
}

export { Menu };
