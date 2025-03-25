/* 

Controlled components are components where the form elements values are controlled by useState. 
But in uncontrolled components, the form state is managed by form itself and the elements are access by useRef directly from DOM. 

*/

// controlled component

import React, { useState } from "react";

function ControlledForm() {
  const [formData, setFormData] = useState({ name: "", place: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Name: ${formData.name}, Place: ${formData.place}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Place: </label>
        <input
          type="text"
          name="place"
          value={formData.place}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ControlledForm;

// uncontrolled component

import { useRef } from "react";

function UncontrolledForm() {
  const nameRef = useRef<HTMLInputElement>(null);
  const placeRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Name: ${nameRef.current?.value}, Place: ${placeRef.current?.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name: </label>
        <input type="text" ref={nameRef} />
      </div>
      <div>
        <label>Place: </label>
        <input type="text" ref={placeRef} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export { UncontrolledForm };
