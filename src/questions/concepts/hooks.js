/* 
Hooks - hooks are functions that allow developers to use state and other features of react in functional components.
  -	useState 	- manages the state of a functional component
  - useEffect	- handles side effects
  -	useContext	- allow the developer to consume context values without wrapping inside consumer 
  -	useMemo	-  catches the computed value to prevent unnecessary recalculation 
  - Custom Hooks:
    When to use?: Extracting and reusing component logic.
    Code: Functions prefixed with "use" returning stateful logic.
    Why?: Enhances code organization, reusability, and readability.
*/
import { useState, useMemo } from "react";

function ExpensiveComponent({ num }) {
  const computedValue = useMemo(() => num * 2, [num]);

  return <p>Computed Value: {computedValue}</p>;
}

const ExpensiveComponent = memo(({ value }) => {
  console.log("Rendered ExpensiveComponent");
  return <p>Value: {value}</p>;
});

/*useCallback	- memories functions to prevent recreation on every re-render*/
const increment = useCallback(() => setCount((c) => c + 1), []);

/*	useRef		-	create reference to DOM element or mutable values - useRef can persist
values across renders and it will not cause renders when the ref updates.*/
import React, { useRef, useState } from "react";

export default function Counter() {
  const countRef = useRef(0); // Mutable value (doesn't trigger re-renders)
  const [renderCount, setRenderCount] = useState(0);

  const increment = () => {
    countRef.current += 1;
    console.log("Current countRef:", countRef.current);
  };

  return (
    <div>
      <p>Mutable countRef: {countRef.current}</p>
      <button onClick={increment}>Increment countRef</button>
      <button onClick={() => setRenderCount((prev) => prev + 1)}>
        Re-render Component
      </button>
      <p>Component re-renders: {renderCount}</p>
    </div>
  );
}
