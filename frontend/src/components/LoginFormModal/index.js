import React, { useState } from 'react';
import {  } from '../../context/';
import LoginForm from './LoginForm';

function LoginForm() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button className="nav-btn" onClick={() => setShow(true)}>Log In</button>
      {show && (
        < onClose={() => setShow(false)}>
          <LoginForm />
        </>
      )}
    </>
  );
}

export default LoginForm;
