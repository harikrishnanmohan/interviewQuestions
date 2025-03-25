/*key vs ref

when key changes the component will be unmounted and then remounted by react so it will create component again.

we can save values in ref that will not change while component rerendering cycles. 
ie, even thought the state in that particular component or the parent component 
changes the component will re rendered but the values that stored in ref.current 
will remain same. values that are stored in recurrent will only reset when the component unmounted and re mounted.*/

import { useRef, useState } from "react";

function Counter() {
  const countRef = useRef(0); // Mutable value that persists across renders
  const [renderCount, setRenderCount] = useState(0); // State to trigger re-render

  const increment = () => {
    countRef.current += 1; // Updating ref value (won't trigger re-render)
    console.log("Ref Count:", countRef.current);
  };

  const forceRender = () => {
    setRenderCount((prev) => prev + 1); // Triggers re-render
  };

  return (
    <div>
      <h2>useRef Mutable Value</h2>
      <p>Ref Count (Won't Cause Re-render): {countRef.current}</p>
      <button onClick={increment}>Increment Ref</button>
      <button onClick={forceRender}>Force Re-render</button>
    </div>
  );
}

export default Counter;
