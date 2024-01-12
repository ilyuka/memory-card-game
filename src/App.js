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

    useEffect(() => {
        const newArr = getNRandomElements(data, difficulty);
        setGameArr(newArr);
    }, [difficulty]);

    return (
        <div>
            {gameStatus === "playing" ? (
                <Board
                    difficulty={difficulty}
                    gameArr={gameArr}
                    setGameArr={setGameArr}
                    selectedIds={selectedIds}
                    setSelectedIds={setSelectedIds}
                />
            ) : (
                <Menu gameStatus={gameStatus} setGameStatus={setGameStatus} difficuly={difficulty} setDifficulty={setDifficulty}/>
            )}
        </div>
    );
}

export default App;
