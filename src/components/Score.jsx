import React from "react";

function Score({ score, bestScore }) {
    return (
        <div>
            <p>score: {score}</p>
            <p>best score: {bestScore}</p>
        </div>
    );
}

export { Score };
