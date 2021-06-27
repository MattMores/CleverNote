import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';
// create a functional component named SignupFormPage.
function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
// If there is a current session user in the Redux store, then
// redirect the user to the "/" path if trying to access the SignupFormPage.
  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
     // On submit of the form, validate that the confirm
    //password is the same as the password fields,
    if (password === confirmPassword) {
      setErrors([]);
      // then dispatch the signup thunk action with the form input values.
      return dispatch(sessionActions.signup({ email, username, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };
// Render a form with controlled inputs for the new user's username,
// email, and password, and confirm password fields.
  return (
    <div className="signupContainer">
      <div className="signupForm">
    <form onSubmit={handleSubmit}>
      <div className='top-section__photo-1' style={{ backgroundImage: "url('https://i.ibb.co/K5pTBJQ/63823-Clever-Note-RK-04.jpg')" }}>
      </div>
      <label>
        Email
        <input
           className="input-4"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <br></br>
      <br></br>
      <label>
        Username
        <input
          className="input-3"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>
      <br></br>
      <br></br>
      <label>
        Password
        <input
          className="input-2"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <br></br>
      <br></br>
      <label className="search-block-1">
        Confirm Password
        <input
          className="input-1"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </label>
      <br></br>
      <br></br>
      <ul className="errors">
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
      <button
      type="submit" className="nav-btn-3">Sign Up</button>
    </form>
    </div>
    </div>
  );
}

{/* <div className="sidenavbar-top__search">
<div className="search-block">
    <i className="fas fa-search"></i>
    <input className="input" placeholder="Search" />
</div>
</div> */}


export default SignupFormPage;
