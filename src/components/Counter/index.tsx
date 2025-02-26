"use client";
import { useState } from "react";
import "./index.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <h1>Counter: {count}</h1>
      <button className="counter-button" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button className="counter-b" onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
