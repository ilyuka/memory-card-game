import React from "react";

function GameStatusButton({ text, onClickMethod }) {
  return (
    <button
      className="mt-6 max-w-max rounded-xl border border-solid border-lime-300 px-6 py-2 font-bold text-lime-300 hover:opacity-75"
      type="button"
      onClick={onClickMethod}
    >
      {text}
    </button>
  );
}

export default GameStatusButton;
