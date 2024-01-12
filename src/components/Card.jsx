import React from "react";
import shuffle from "../utils/shuffle";

function Card({ difficulty, card, setGameArr, selectedIds, setSelectedIds }) {
    return (
        <button
            type="button"
            onClick={() => {
                if (selectedIds.has(card.id)) {
                    console.log("selected twice!");
                    return;
                }
                setGameArr((arr) => {
                    const newArr = shuffle([...arr]);
                    return newArr;
                });
                setSelectedIds((prevSet) => {
                    const newSet = new Set([ ...prevSet ]);
                    newSet.add(card.id);
                    if (newSet.size === difficulty) {
                        console.log('win!')
                        return
                    }
                    console.log(newSet.size, difficulty)
                    return newSet;
                });
            }}
        >
            <p>{card.id}</p>
            <p>{card.name}</p>
        </button>
    );
}

export { Card };
