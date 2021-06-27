import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import './LoginForm.css';
// add React funcitonal compoment named LoginForm
function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
    //Make sure to handle the display errors from thunk actions
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };
//Render a form with a controlled input for the user login credential
  return (
    <div className="signupContainer-1">
    <div className="signupForm-1">
    <form onSubmit={handleSubmit}>
    <div className='top-section__photo-1' style={{ backgroundImage: "url('https://i.ibb.co/K5pTBJQ/63823-Clever-Note-RK-04.jpg')" }}>
      </div>
      <label>
        Username or Email
        <input
          className="input-5"
          type="text"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          required
        />
      </label>
      <br></br>
      <br></br>
      <label>
        Password
        <input
          className="input-6"
          type="password"
          value={password}
          //Add a controlled input for the user password
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <ul className="errors-1">
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <button
        //on Submit, dispatch the login thunk action with the form input
      className="nav-btn-4" type="submit">Log In</button>
    </form>
    </div>
    </div>
  );
}

export default LoginForm;
