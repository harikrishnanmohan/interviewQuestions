import { useEffect, useState } from "react";

const RealTimeFilter = () => {
  const fruits = [
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Pineapple",
    "Strawberry",
    "Blueberry",
    "Grapes",
    "Watermelon",
    "Peach",
    "Cherry",
    "Papaya",
    "Kiwi",
    "Pomegranate",
    "Guava",
    "Pear",
    "Fig",
    "Dragon Fruit",
    "Lychee",
    "Coconut",
  ];

  const [filteredFruits, setFilteredFruits] = useState([]);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    if (userInput !== "") {
      const arr = fruits.filter((fruit) =>
        fruit.toLocaleLowerCase().includes(userInput.toLocaleLowerCase())
      );
      setFilteredFruits(arr);
    } else {
      setFilteredFruits([]);
    }
  }, [userInput]);

  return (
    <div>
      <h1>Filter</h1>
      <input
        type="text"
        placeholder="search here...."
        onChange={(e) => setUserInput(e.target.value)}
        value={userInput}
      />
      {filteredFruits.length > 0 && (
        <ul>
          {filteredFruits.map((fruit) => (
            <li key={fruit}>{fruit}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default RealTimeFilter;
