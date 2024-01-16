import React from "react";

function Score({ score, bestScore, difficulty }) {
  return (
    <div className="mb-8 flex flex-col items-center">
      <div className="flex gap-4">
        <p>Score: {score}</p>
        <p>Best: {bestScore}</p>
      </div>
      <div>
        <p>
          {score}/{difficulty}
        </p>
      </div>
    </div>
  );
}

export { Score };
