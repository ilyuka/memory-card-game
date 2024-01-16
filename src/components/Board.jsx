import React, { useEffect } from "react";
import { Card } from "./Card.jsx";
import { Score } from "./Score.jsx";

function Board({
    difficulty,
    gameArr,
    setGameArr,
    selectedIds,
    setSelectedIds,
    score,
    setScore,
    bestScore,
    setBestScore,
    setGameStatus,
}) {
    useEffect(() => {
        setScore(0);
        setSelectedIds(new Set());
        console.log("useEffect inside board");
    }, []);
    return (
        <div>
            <Score score={score} bestScore={bestScore} />
            <h2>Board</h2>
            {gameArr.map((card) => {
                return (
                    <Card
                        key={card.id}
                        difficulty={difficulty}
                        card={card}
                        setGameArr={setGameArr}
                        selectedIds={selectedIds}
                        setSelectedIds={setSelectedIds}
                        score={score}
                        setScore={setScore}
                        bestScore={bestScore}
                        setBestScore={setBestScore}
                        setGameStatus={setGameStatus}
                    />
                );
            })}
        </div>
    );
}

export { Board };
