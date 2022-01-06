import "./registration.css";
import { useState } from "react";
import Axios from "axios";

function Registration() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitRegistration = () => {
    Axios.post("http://localhost:3001/registration", {
      name: name,
      username: username,
      password: password,
    }).then((response) => {
      window.location.href = "/login";
    });
  };

  return (
    <div className="center">
      <h1>Registration</h1>
      <div className="form">
        <div className="txt_field">
          <input
            type="text"
            required
            placeholder={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <span></span>
          <label>Name</label>
        </div>

        <div className="txt_field">
          <input
            type="text"
            required
            placeholder={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <span></span>
          <label>Username</label>
        </div>

        <div className="txt_field">
          <input
            type="text"
            required
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <span></span>
          <label>Password</label>
        </div>

        <button onClick={submitRegistration}>Registration</button>
        <div className="signup_link">
          Already Have an Account? <a href="/login">Login Here</a>
        </div>
      </div>
    </div>
  );
}

export default Registration;
