import "./form.css";

function Forms() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Click");
  }

  return (
    <form className="container-forms" onSubmit={handleSubmit}>
      <div className="container-name">
        <label>
          First name
          <input type="text" placeholder="First name" />
          <span>Error</span>
        </label>
        <label>
          Last name
          <input type="text" placeholder="Last name" />
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
      <button className="button-submit">Submit</button>
    </form>
  );
}

export { Forms };
