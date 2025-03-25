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

useMemo: A hook that memoizes the result of a computation. 
It's used to avoid recalculating an expensive function if its dependencies have not changed. 
This is particularly useful for optimizing performance by reducing computation during re-renders.

useCallback: A hook that memoizes functions. 
It's used to return a memoized callback function whose dependencies haven't changed, thus preventing unnecessary 
re-creations of the function across re-renders.
*/