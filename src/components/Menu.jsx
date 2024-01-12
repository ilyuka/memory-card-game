import React from "react";

function Menu({
    gameStatus,
    setGameStatus,
    difficuly,
    setDifficulty,
    score,
    setScore,
}) {
    if (gameStatus === "choosingDifficulty") {
        return (
            <div>
                <button onClick={() => setDifficulty(4)}>easy(4)</button>
                <button onClick={() => setDifficulty(8)}>medium(8)</button>
                <button onClick={() => setDifficulty(16)}>hard(16)</button>
                <button onClick={() => setGameStatus("playing")}>start</button>
            </div>
        );
    } else {
        return <h1> playig game should not be displayed </h1>;
    }
}

export { Menu };
