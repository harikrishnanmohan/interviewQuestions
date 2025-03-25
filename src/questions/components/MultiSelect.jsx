import { useEffect, useRef, useState } from "react";

const MultiSelect = () => {
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectedUsersId, setSelectedUsersId] = useState(new Set([]));
  const inputRef = useRef(null);

  const fetchUser = async (query) => {
    const res = await fetch(`https://dummyjson.com/users/search?q=${query}`);
    const json = await res.json();
    if (selectedUsersId.size > 0) {
      const arr = json.users.filter((item) => !selectedUsersId.has(item.id));
      setResult(arr);
    } else setResult(json.users);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (userInput.trim() !== "") fetchUser(userInput);
    }, 300);

    return () => clearTimeout(timer);
  }, [userInput]);

  const onClickOption = (item) => {
    setSelectedUsers((prev) => [...prev, item]);
    setSelectedUsersId((prev) => new Set([...prev, item.id]));
    setResult([]);
    setUserInput("");
    inputRef.current.focus();
  };

  const onClickPhill = (id) => {
    const arr = [...selectedUsers];
    setSelectedUsers(arr.filter((item) => item.id !== id));
    selectedUsersId.delete(id);
  };

  const onDelete = (e) => {
    if (
      e.code === "Backspace" &&
      selectedUsers.length > 0 &&
      e.target.value.trim() === ""
    ) {
      setSelectedUsers((pre) => pre.slice(0, pre.length - 1));
      const arr = Array.from(selectedUsers);
      arr.pop();
      setSelectedUsersId(new Set(arr));
    }
  };

  return (
    <div className="multiselect">
      <div className="multiselect__container">
        {selectedUsers.map((item) => (
          <span
            className="multiselect__sselected_results"
            key={item.id}
            onClick={() => onClickPhill(item.id)}
          >
            <img src={item.image} alt={`${item.firstName} ${item.lastName}`} />
            {item.firstName} {item.lastName}{" "}
            <span className="select__delete">X</span>
          </span>
        ))}
        <input
          type="text"
          placeholder="Search here..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className="multiselect__input"
          ref={inputRef}
          onKeyDown={onDelete}
        />
      </div>
      {result?.length > 0 && (
        <ul className="multiselect__search_results">
          {result?.length > 0 &&
            result.map((item) => (
              <li
                key={item.id}
                className="multiselect__search_results_option"
                onClick={() => onClickOption(item)}
              >
                <img
                  src={item.image}
                  alt={`${item.firstName} ${item.lastName}`}
                />
                {item.firstName} {item.lastName}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default MultiSelect;
