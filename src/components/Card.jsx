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
    <div className="h-64 w-52 rounded-xl border-2 border-solid border-violet-500 bg-slate-800 ">
      <button
        className="h-full w-full"
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
        <div
          className="flex w-full items-center justify-center p-8"
          //   style={{ maxHeight: "80%" }}
        >
          <img
            className="h-full w-full object-contain"
            src={require(`../../public/assets/cardImages/${card.src}`)}
            alt={card.name}
          />
        </div>

        <p>{card.name}</p>
      </button>
    </div>
  );
}

export { Card };
