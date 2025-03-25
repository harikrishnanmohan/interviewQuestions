import { useEffect, useState } from "react";

const AutoCompleteSearch = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [cache, setCache] = useState({});

  const fetchData = async (text) => {
    if (cache[text]) {
      setResult(cache[text]);
      return;
    }

    const response = await fetch(
      `https://dummyjson.com/recipes/search?q=${text}`
    );
    const json = await response.json();
    setResult(json?.recipes);
    setCache((prev) => {
      return { ...prev, [text]: json.recipes };
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (input === "") setResult([]);
      else fetchData(input);
    }, 250);

    return () => clearTimeout(timer);
  }, [input]);

  return (
    <div>
      <h1>Auto Complete Search</h1>
      <div className="input-section">
        <input
          type="text"
          placeholder="Search here..."
          onChange={(e) => setInput(e.target.value)}
          className="input"
          value={input}
          onFocus={() => setShowResult(true)}
          onBlur={() => setShowResult(false)}
        />
        {result.length > 0 && showResult && (
          <ul className="results">
            {result.map((item) => (
              <li key={item.id} className="item">
                {item.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
export default AutoCompleteSearch;
