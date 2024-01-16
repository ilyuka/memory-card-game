import React from "react";

function Score({ score, bestScore, difficulty }) {
    return (
        <div>
            <p>score: {score}</p>
            <p>best score: {bestScore}</p>
            <p>
                {score}/{difficulty}
            </p>
        </div>
    );
}

export { Score };
