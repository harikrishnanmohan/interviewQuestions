const Interests = ({ data, setData, error }) => {
  const { interests } = data;
  const onUserInput = (e, value) => {
    setData((prev) => ({
      ...prev,
      interests: !prev.interests.includes(value)
        ? [...prev.interests, value]
        : prev.interests.filter((i) => i !== value),
    }));
  };
  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            onChange={(e) => onUserInput(e, "coding")}
            checked={interests.includes("coding")}
          />
          Coding
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            onChange={(e) => onUserInput(e, "music")}
            checked={interests.includes("music")}
          />
          music
        </label>
      </div>
      {error?.interests && <span>{error.interests}</span>}
    </div>
  );
};
export default Interests;
