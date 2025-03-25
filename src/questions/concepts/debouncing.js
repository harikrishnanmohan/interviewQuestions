/* 
Debouncing is used to delay execution of a function until after a specified time has passed since the last call. 
This is useful for optimizing search queries, API calls, and event listeners in React.
*/

import { useState, useEffect } from "react";

function Search() {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState(query);
  const [data, setData] = useState(null);

  // Debounce logic: Update `debouncedQuery` after 500ms
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500); // Delay of 500ms

    return () => clearTimeout(timer); // Cleanup previous timeout on change
  }, [query]);

  // Fetch API when `debouncedQuery` changes
  useEffect(() => {
    if (!debouncedQuery) return;

    async function fetchData() {
      const response = await fetch(
        `https://api.example.com/search?q=${debouncedQuery}`
      );
      const result = await response.json();
      setData(result);
    }

    fetchData();
  }, [debouncedQuery]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}

export default Search;
