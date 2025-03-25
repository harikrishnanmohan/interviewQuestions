/* 
Fetching Data Using fetch
The fetch API allows us to request data from an API endpoint.
*/
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return <div>{data ? <h1>{data.title}</h1> : <p>Loading...</p>}</div>;
}

export { App };

/* 
📌 Key Points:

fetch() requests data from an API.
.then(response => response.json()) converts the response to JSON.
.catch(error => console.error()) handles errors.
useEffect(() => { ... }, []) ensures the fetch runs once when the component mounts.

*/

/* 
 Fetching Data with async/await
Using async/await makes the code cleaner.
*/

import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/1"
        );
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return <div>{data ? <h1>{data.title}</h1> : <p>Loading...</p>}</div>;
}

export default App;
