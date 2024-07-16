import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const handleIncriment = () => {
    setCount(count + 1);
  };
  const handleDecriment = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div>
      <button className="incri" onClick={handleIncriment}>
        +
      </button>
      <span className="counter">{count}</span>
      <button className="incri" onClick={handleDecriment}>
        -
      </button>
    </div>
  );
}
