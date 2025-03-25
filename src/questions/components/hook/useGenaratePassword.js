const useGenaratePassword = () => {
  const genaratePassword = (rules, length) => {
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const smallcaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "1234567890,";
    const symbols = "!@#$%^&*()";

    let availableChars = "";
    const updatedRuls = rules.filter((rule) => rule.value);
    if (updatedRuls.length < 1) return "Please check atleat one checkbox";
    updatedRuls.forEach((item) => {
      switch (item.key) {
        case "uppercase":
          availableChars += uppercaseLetters;
          break;
        case "lowercase":
          availableChars += smallcaseLetters;
          break;
        case "numbers":
          availableChars += numbers;
          break;
        case "symbols":
          availableChars += symbols;
          break;
        default:
          break;
      }
    });

    let password = "";
    for (let i = 0; i < length; i++) {
      password +=
        availableChars[Math.floor(Math.random() * availableChars.length)];
    }
    return password;
  };
  return { genaratePassword };
};

export default useGenaratePassword;
