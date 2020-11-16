import React, { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(20);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (count <= 0 || pause) {
      return;
    }

    const timeout = setTimeout(setCount, 1000, count - 1);

    return () => clearTimeout(timeout);
  }, [count, pause]);

  const restart = () => {
    setCount(20);
    setPause(false);
  };

  const pauseHandler = () => {
    setPause(!pause);
  };

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={pauseHandler} disabled={count === 0}>
        {pause ? "Play" : "Pause"}
      </button>
      &nbsp;
      <button onClick={restart} disabled={!pause && count !== 0}>
        Restart
      </button>
    </div>
  );
}
