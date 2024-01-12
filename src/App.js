import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>React with Webpack</h1>
      <button type='button' onClick={() => setCounter(counter + 1)}>{counter}</button>
    </div>
  );
};

export default App;
