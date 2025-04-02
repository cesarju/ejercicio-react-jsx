import { useState } from "react";
import "./form.css";

function Forms() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  const [formValidation, setFormValidation] = useState({
    name: undefined,
    lastName: undefined,
  });

  function handleSubmit(event) {
    event.preventDefault();

    console.log(name + " " + lastName);
    console.log("Click");
  }

  const handleNameChange = (event) => {
    const value = event.target.value;
    setFormValidation({
      ...formValidation,
      name: value.length === 0 ? "Este campo es requerido" : "",
    });
    setName(value);
  };

  const handleLastNameChange = (event) => {
    const value = event.target.value;
    setFormValidation({
      ...formValidation,
      lastName: value.length === 0 ? "El campo de Last Name es requerido" : "",
    });
    setLastName(value);
  };

  const isValidForm = Object.keys(formValidation).every(
    (key) => formValidation[key] == ""
  );

  console.log(isValidForm);

  return (
    <form className="container-forms" onSubmit={handleSubmit}>
      <div className="container-name">
        <label>
          First name
          <input
            type="text"
            placeholder="First name"
            value={name}
            onChange={handleNameChange}
          />
          {formValidation.name && <span>{formValidation.name}</span>}
        </label>
        <label>
          Last name
          <input
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={handleLastNameChange}
          />
          {formValidation.lastName && <span>{formValidation.lastName}</span>}
        </label>
      </div>
      <label>
        Email
        <input type="email" placeholder="Email" />
      </label>
      <label>
        Password
        <input type="password" placeholder="Password" />
      </label>
      <label>
        Re-password
        <input type="password" placeholder="Re-password" />
      </label>
      <button
        className="button-submit"
        disabled={!isValidForm}
        style={{ backgroundColor: !isValidForm ? "black" : "#1c91f5" }}
      >
        Log in
      </button>
    </form>
  );
}

export { Forms };
