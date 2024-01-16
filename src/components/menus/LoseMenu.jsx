import React from "react";

function LoseMenu({ score, bestScore, setGameStatus }) {
    return (
        <div>
            <h1>you lost!</h1>
            <p>your score {score}</p>
            <p>your best score {bestScore}</p>
            <button type="button" onClick={() => setGameStatus("playing")}>
                restart
            </button>
            <button
                type="button"
                onClick={() => setGameStatus("choosingDifficulty")}
            >
                change diff
            </button>
        </div>
    );
}

export { LoseMenu };
