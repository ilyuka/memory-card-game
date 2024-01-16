import React from "react";

function ChooseDifficultyMenu({ difficulty, setDifficulty, setGameStatus }) {
    return (
        <div>
            <button onClick={() => setDifficulty(4)}>easy(4)</button>
            <button onClick={() => setDifficulty(8)}>medium(8)</button>
            <button onClick={() => setDifficulty(16)}>hard(16)</button>
            <button onClick={() => setGameStatus("playing")}>start</button>
        </div>
    )

}

export { ChooseDifficultyMenu }