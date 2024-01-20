import React, { useState, useEffect } from "react";
import shuffle from "../utils/shuffle";
import "../css/Card.css";

function Card({
  difficulty,
  card,
  gameArr,
  setGameArr,
  selectedIds,
  setSelectedIds,
  score,
  setScore,
  bestScore,
  setBestScore,
  setGameStatus,
  boardScore,
  setBoardScore,
  isFlipped,
  setIsFlipped,
}) {
  const [toggle, setToggle] = useState(false);
  let timer;

  useEffect(() => {
    timer = setTimeout(() => {
      setIsFlipped(false);
    }, 100);
  }, [toggle]);

  return (
    // prettier-ignore
    <div className={`bg-slate-800 h-64 w-52 rounded-xl border-2 border-solid border-violet-500 card ${isFlipped ? "flipped" : ""}`}> 
      <div className="card-back max-w-full max-h-full rounded-xl">
        <img style={{height: '252px', width: '208px'}} className="rounded-xl" src={require("../../public/assets/card-back.png")} alt='card back'/>
      </div>
      <div className="card-front ">
        <button
          className="h-full w-full"
          type="button"
          onClick={() => {
            if (selectedIds.has(card.id)) {
              setGameStatus("lost");
              return;
            }

            setScore((prevScore) => {
              const newScore = prevScore + 1;
              if (newScore > bestScore) {
                setBestScore(newScore);
              }
              setBoardScore(boardScore + 1);
              return newScore;
            });

            setSelectedIds((prevSet) => {
              const newSet = new Set([...prevSet]);
              newSet.add(card.id);
              if (newSet.size === difficulty) {
                setGameStatus("won");
                return;
              }
              return newSet;
            });

            setIsFlipped(true);
            timer = setTimeout(() => {
              setGameArr((arr) => {
                const newArr = shuffle([...arr]);
                return newArr;
              });
              setToggle(toggl => !toggl);
            }, 1000)
            
        }}
        >
          <div className="flex w-full items-center justify-center p-8">
            <img
              className="h-full w-full object-contain"
              src={require(`../../public/assets/cardImages/${card.src}`)}
              alt={card.name}
            />
          </div>
          <p>{card.name}</p>
        </button>
      </div>
    </div>
  );
}

export { Card };
