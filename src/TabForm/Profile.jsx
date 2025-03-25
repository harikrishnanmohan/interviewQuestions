const Profile = ({ data, setData, error }) => {
  const { name, age, email } = data;
  const onUserInput = (e, input) => {
    setData((prev) => ({ ...prev, [input]: e.target.value }));
  };

  return (
    <div>
      <div>
        <label>Name:</label>
        <input
          type="text"
          className="inputBox"
          value={name}
          onChange={(e) => onUserInput(e, "name")}
        />
        {error?.name && <span>{error.name}</span>}
      </div>
      <div>
        <label>Age:</label>
        <input
          type="number"
          className="inputBox"
          value={age}
          onChange={(e) => onUserInput(e, "age")}
        />
        {error?.age && <span>{error.age}</span>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="text"
          className="inputBox"
          value={email}
          onChange={(e) => onUserInput(e, "email")}
        />
        {error?.email && <span>{error.email}</span>}
      </div>
    </div>
  );
};
export default Profile;
