import { useState } from "react";

const PhoneNumber = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  //FIRST WAY

  // const onUserInput = (e) => {
  //   const value = e.target.value;

  //   let tempValue = value.replace(/[^0-9]/g, "");
  //   const inputLength = tempValue.length;
  //   if (inputLength > 10) return;
  //   let arr = [];
  //   for (let i = 0; i < inputLength; i++) {
  //     if (inputLength > 3 && i === 0) arr.push("(");
  //     arr.push(tempValue[i]);
  //     if (inputLength > 3 && i === 2) arr.push(") ");
  //     if (inputLength > 6 && i === 5) arr.push("-");
  //   }
  //   if (tempValue.length > 3) ;
  //   setPhoneNumber(arr.join(""));
  // };

  // SECOND WAY
  const formatNumber = (input) => {
    let tempValue = input.replace(/[^0-9]/g, "");
    const inputLength = tempValue.length;

    if (inputLength > 10) return phoneNumber;

    if (inputLength > 6)
      return `(${tempValue.slice(0, 3)}) ${tempValue.slice(
        3,
        6
      )}-${tempValue.slice(6)}`;
    else if (inputLength > 3)
      return `(${tempValue.slice(0, 3)}) ${tempValue.slice(3)}`;
    else return tempValue;
  };

  const onUserInput = (e) => {
    setPhoneNumber(formatNumber(e.target.value));
  };

  return (
    <div>
      <h1>Format Phonenumber (123) 346-7890</h1>
      <input
        placeholder="Enter here..."
        onChange={(e) => onUserInput(e)}
        value={phoneNumber}
      />
    </div>
  );
};

export default PhoneNumber;
