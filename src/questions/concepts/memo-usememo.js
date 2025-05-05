/*memo Vs useMemo

In React, React.memo is a higher-order component that memoizes functional components, preventing re-renders 
if props haven't changed, thus optimizing performance. 

Conversely, useMemo is a hook that memoizes the result of a function 
within a component, ensuring expensive computations are only re-executed when their dependencies change. 
While React.memo optimizes component rendering, useMemo focuses on optimizing specific computations within those components.*/

/*

The key differences between memo, useMemo, and useCallback in React are:

memo: A higher-order component used to optimize functional components by memoizing their rendered output. 
It prevents unnecessary re-renders when the component's props have not changed.
*/
// Child.tsx
import React from "react";

const Child = React.memo(({ name }: { name: string }) => {
  console.log("Child rendered");
  return <div>Hello, {name}</div>;
});

export default Child;

/*
useMemo: A hook that memoizes the result of a computation. 
It's used to avoid recalculating an expensive function if its dependencies have not changed. 
This is particularly useful for optimizing performance by reducing computation during re-renders.
*/w
import React, { useState, useMemo } from "react";

export default function MemoExample() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(5);

  const expensiveCalculation = (num: number) => {
    console.log("Calculating...");
    return num * 1000;
  };

  const result = useMemo(() => expensiveCalculation(number), [number]);

  return (
    <div>
      <h2>useMemo Example</h2>
      <p>Expensive Result: {result}</p>
      <button onClick={() => setCount((c) => c + 1)}>Re-render</button>
      <button onClick={() => setNumber((n) => n + 1)}>Change Number</button>
    </div>
  );
}


/*
useCallback: A hook that memoizes functions. 
It's used to return a memoized callback function whose dependencies haven't changed, thus preventing unnecessary 
re-creations of the function across re-renders.

*/
import React, { useState, useCallback } from "react";

const Button = React.memo(({ handleClick }: { handleClick: () => void }) => {
  console.log("Button rendered");
  return <button onClick={handleClick}>Click me</button>;
});

export default function CallbackExample() {
  const [count, setCount] = useState(0);

  const memoizedClick = useCallback(() => {
    console.log("Clicked!");
  }, []);

  return (
    <div>
      <h2>useCallback Example</h2>
      <Button handleClick={memoizedClick} />
      <button onClick={() => setCount((c) => c + 1)}>Re-render Parent</button>
    </div>
  );
}
