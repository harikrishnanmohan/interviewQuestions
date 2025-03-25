/* 
Higher-Order Components (HOCs) in React are functions that take a component and return a new enhanced component.
They are used for code reuse, logic abstraction, and component composition
*/

import React, { useEffect, useState } from "react";

// Higher-Order Component
const withDataFetching = (WrappedComponent, url) => {
  return (props) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetch(url)
        .then((response) => response.json())
        .then((result) => {
          setData(result);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false);
        });
    }, [url]);

    if (loading) {
      return <p>Loading...</p>;
    }

    return <WrappedComponent {...props} data={data} />;
  };
};

// Usage
const UserList = ({ data }) => {
  return (
    <div>
      <h2>Users</h2>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

// Wrapping UserList with withDataFetching HOC
export default withDataFetching(
  UserList,
  "https://jsonplaceholder.typicode.com/users"
);
