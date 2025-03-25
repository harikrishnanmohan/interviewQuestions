const Settings = ({ data, setData }) => {
  const { theam } = data;
  return (
    <div>
      <div>
        <label>
          <input
            type="radio"
            name="theam"
            checked={theam === "light"}
            onChange={() => setData((prev) => ({ ...prev, theam: "light" }))}
          />
          light
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="theam"
            checked={theam === "dark"}
            onChange={() => setData((prev) => ({ ...prev, theam: "dark" }))}
          />
          dark
        </label>
      </div>
    </div>
  );
};
export default Settings;
