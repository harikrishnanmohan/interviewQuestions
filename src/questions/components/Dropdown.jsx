import { useState } from "react";

const data = [
  { country: "India", value: "in", district: ["Kerala", "Delhi"] },
  { country: "US", value: "us", district: ["Alabama", "Alaska"] },
  { country: "China", value: "ch", district: ["Gaoxiong", "Tainan"] },
];

const Dropdown = () => {
  const [district, setDistrict] = useState([]);

  const onSelectCountry = (value) => {
    console.log(value);
    if (value !== "") {
      const dist = data.filter((item) => item.value === value);
      setDistrict(dist[0].district);
      console.log(dist[0].district);
    } else {
      setDistrict([]);
    }
  };

  const onSelectDistrict = (value) => {
    console.log(value);
  };

  return (
    <div>
      <select
        name="country"
        id="country"
        onChange={(e) => onSelectCountry(e.target.value)}
      >
        <option value="">Select a country</option>
        {data.map((item) => {
          return (
            <option value={item.value} key={item.country}>
              {item.country}
            </option>
          );
        })}
      </select>
      {district.length > 0 && (
        <select
          name="district"
          id="district"
          onChange={(e) => onSelectDistrict(e.target.value)}
        >
          <option value="">Select a district</option>
          {district.map((item) => {
            return (
              <option value={item} key={item}>
                {item}
              </option>
            );
          })}
        </select>
      )}
    </div>
  );
};
export default Dropdown;
