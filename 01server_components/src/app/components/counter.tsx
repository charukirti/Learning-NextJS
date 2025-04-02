"use client"; // marks this component as client component

import { useState } from "react";

export default function Counter() {
  console.log("Counter component");

  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount((prevCount) => prevCount + 1)}>
      Clicked {count} times.
    </button>
  );
}
