import { useState } from "react";
import useGenaratePassword from "./hook/useGenaratePassword";

const PasswordGenerator = () => {
  const { genaratePassword } = useGenaratePassword();

  const [passwordLength, setPasswordLength] = useState(7);
  const [password, setPassword] = useState("");
  const [passwordRules, setPasswordRules] = useState([
    {
      key: "uppercase",
      value: false,
    },
    {
      key: "lowercase",
      value: false,
    },
    {
      key: "numbers",
      value: false,
    },
    {
      key: "symbols",
      value: false,
    },
  ]);

  const onUserInput = (e, name) => {
    setPasswordRules((prev) => {
      const newRules = prev.map((rule) => ({
        key: rule.key,
        value: rule.key === name ? e.target.checked : rule.value,
      }));
      return newRules;
    });
  };

  const onLengthChange = (e) => {
    setPasswordLength(e.target.value);
  };

  return (
    <div className="password__genarator">
      <div className="password__genarator_title">
        <span>{password}</span>
        <button
          className="copy__button"
          onClick={() => navigator.clipboard.writeText(password)}
        >
          Copy
        </button>
      </div>
      <div className="password__rules">
        <label>
          Password Length <span>{passwordLength}</span>
        </label>
        <input
          type="range"
          className="password__length"
          value={passwordLength}
          min={7}
          max={20}
          onChange={(e) => onLengthChange(e)}
        />
        <div className="length__limit">
          <span>{7}</span>
          <span>{20}</span>
        </div>
        <div className="checkbox__group">
          <label>
            <input
              className="password__checkbox"
              type="checkbox"
              checked={passwordRules.uppercase}
              onChange={(e) => onUserInput(e, "uppercase")}
            />
            Include uppercase letters
          </label>
          <label>
            <input
              className="password__checkbox"
              type="checkbox"
              checked={passwordRules.uppercase}
              onChange={(e) => onUserInput(e, "lowercase")}
            />
            Include lowercase letters
          </label>
          <label>
            <input
              className="password__checkbox"
              type="checkbox"
              checked={passwordRules.uppercase}
              onChange={(e) => onUserInput(e, "numbers")}
            />
            Include numbers letters
          </label>
          <label>
            <input
              className="password__checkbox"
              type="checkbox"
              checked={passwordRules.uppercase}
              onChange={(e) => onUserInput(e, "symbols")}
            />
            Include symbols letters
          </label>
        </div>
        <button
          className="genarate__button"
          onClick={() =>
            setPassword(genaratePassword(passwordRules, passwordLength))
          }
        >
          Genarate
        </button>
      </div>
    </div>
  );
};

export default PasswordGenerator;
