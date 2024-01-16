import React from "react";

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
            console.log("new diff", newDifficulty);
            setDifficulty(newDifficulty);
            console.log(difficulty);
        }
        setGameStatus("playing");
    }
    return (
        <div>
            <h1>you won!</h1>
            <p>your score {score}</p>
            <p>your best score {bestScore}</p>
            <button type="button" onClick={() => keepPlaying()}>
                keep playing
            </button>
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

export { WinMenu };
