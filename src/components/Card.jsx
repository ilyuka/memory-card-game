import React from "react";
import shuffle from "../utils/shuffle";

function Card({
    difficulty,
    card,
    setGameArr,
    selectedIds,
    setSelectedIds,
    score,
    setScore,
    bestScore,
    setBestScore,
    setGameStatus,
}) {
    return (
        <button
            type="button"
            onClick={() => {
                if (selectedIds.has(card.id)) {
                    console.log("selected twice!");
                    setGameStatus("lost");
                    return;
                }
                setSelectedIds((prevSet) => {
                    const newSet = new Set([...prevSet]);
                    newSet.add(card.id);
                    if (newSet.size === difficulty) {
                        console.log("win!");
                        setGameStatus("won");
                        return;
                    }
                    console.log(newSet.size, difficulty);
                    return newSet;
                });
                setScore((prevScore) => {
                    const newScore = prevScore + 1;
                    if (newScore > bestScore) {
                        setBestScore(newScore);
                    }
                    return newScore;
                });

                setGameArr((arr) => {
                    const newArr = shuffle([...arr]);
                    return newArr;
                });
            }}
        >
            <p>{card.id}</p>
            <p>{card.name}</p>
        </button>
    );
}

export { Card };
