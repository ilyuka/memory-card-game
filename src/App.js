import React, { useEffect, useState } from "react";
import { data } from "./data";
import { Board } from "./components/Board.jsx";
import { Menu } from "./components/Menu.jsx";
import { getNRandomElements } from "./utils/getNRandomElements.js";

function App() {
    const [difficulty, setDifficulty] = useState(4);
    const [gameArr, setGameArr] = useState([]);
    const [selectedIds, setSelectedIds] = useState(new Set());
    const [gameStatus, setGameStatus] = useState("choosingDifficulty");
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    useEffect(() => {
        const newArr = getNRandomElements(data, difficulty);
        setGameArr(newArr);
        console.log("useEffect inside App");
    }, [difficulty, gameStatus]);

    return (
        <div>
            {gameStatus === "playing" ? (
                <Board
                    difficulty={difficulty}
                    gameArr={gameArr}
                    setGameArr={setGameArr}
                    selectedIds={selectedIds}
                    setSelectedIds={setSelectedIds}
                    score={score}
                    setScore={setScore}
                    bestScore={bestScore}
                    setBestScore={setBestScore}
                    setGameStatus={setGameStatus}
                />
            ) : (
                <Menu
                    gameStatus={gameStatus}
                    setGameStatus={setGameStatus}
                    difficulty={difficulty}
                    setDifficulty={setDifficulty}
                    score={score}
                    bestScore={bestScore}
                />
            )}
        </div>
    );
}

export default App;
