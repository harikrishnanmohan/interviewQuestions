const fd = new FormData(event.target);
const acquisitionChannel = fd.getAll("acquisition");
const acquisitionChannel2 = fd.get("acquisition");
const data = Object.fromEntries(fd.entries);
data.acquisition = acquisitionChannel;
console.log(data);

/* 
1️⃣ new FormData(event.target) automatically gathers all form inputs.
2️⃣ No need for useState to manage input values.
3️⃣ Supports file uploads without extra handling.
4️⃣ Data is logged to the console and can be sent via fetch().
*/

import React from "react";

function FormDataFromEvent() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.target as HTMLFormElement); // Create FormData from form

    console.log("Form Data Entries:");
    for (const [key, value] of fd.entries()) {
      console.log(key, value);
    }

    // Example API request (uncomment in real usage)
    /*
    await fetch("https://api.example.com/upload", {
      method: "POST",
      body: fd,
    });
    */

    alert("Form submitted!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name: </label>
        <input type="text" name="name" required />
      </div>
      <div>
        <label>Place: </label>
        <input type="text" name="place" required />
      </div>
      <div>
        <label>Profile Picture: </label>
        <input type="file" name="profilePicture" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormDataFromEvent;
