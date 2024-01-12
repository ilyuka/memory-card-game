import React from "react"
import { Card } from "./Card.jsx"

function Board({ difficulty, gameArr, setGameArr, selectedIds, setSelectedIds }) {
    return (
        <div>
            <h2>Board</h2>
            {gameArr.map(card => {
                return <Card key={card.id} difficulty={difficulty} card={card} setGameArr={setGameArr} selectedIds={selectedIds} setSelectedIds={setSelectedIds}/>
            })}
        </div>
    )
}

export { Board }
