import { useEffect, useState } from "react";

const useDebounce = (text, delay) => {
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedText(text), delay);
    return () => clearTimeout(timeout);
  }, [text, delay]);

  return debouncedText;
};

const Debounce = () => {
  const [userInput, setUserInput] = useState("");
  const debouncedText = useDebounce(userInput, 3000);

  return (
    <div>
      <h1>Debounce hook 3s</h1>
      <input
        type="text"
        placeholder="Type here...."
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <p>{debouncedText}</p>
    </div>
  );
};

export default Debounce;
