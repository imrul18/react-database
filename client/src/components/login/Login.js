import "./login.css";
import { useState } from "react";
import Axios from "axios";

function Login() {
  var [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submitLogin = () => {
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response) => {
      console.log(response.data);
      if (response.data.length === 0) {
        setError("Wrong Password");
      } else {
        window.location.href = "/home";
      }
    });
  };

  return (
    <div className="center">
      <h1>Login</h1>
      <div className="form">
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

        <button onClick={submitLogin}>Login</button>
        <div className="signup_error">{error}</div>
        <div className="signup_link">
          Haven't an Account? <a href="/registration">Signup Here</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
