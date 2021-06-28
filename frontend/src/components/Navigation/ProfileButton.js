import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
//Create a React functional component called ProfileButton
function ProfileButton({ user }) {
  const dispatch = useDispatch();
  //showMenu controls displaying the dropdown.
  const [showMenu, setShowMenu] = useState(false);
//defaults to false indicating that the menu is hidden
// Render the ProfileButton component only when there is a session user.
  const openMenu = () => {
   // If showMenu is true, then set the showMenu to true.
    if (showMenu) return;
    setShowMenu(true);
  };
//If showMenu is false, nothing should happen.
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };
// When clicked, the profile button should trigger
//a component state change and cause a dropdown menu to be rendered.
    document.addEventListener('click', closeMenu);
//When the dropdown menu is open, you need to register an event listener for click events on the entire
//page (the document), in order to know when to close the menu.
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);
// The cleanup function for the useEffect should remove this event listener.

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <button className="nav-btn" onClick={openMenu}>
        <i className="fas fa-sign-in-alt" />
      </button>
      {showMenu && (
        <div className="userDrop-5">
        <ul className="profile-dropdown">
          <li className="userDrop-1">User: {user.username}</li>
          <br></br>
          <li className="userDrop">Email: {user.email}</li>
          <br></br>
          <li>
            <button className="logout-btn" onClick={logout}>Log Out</button>
          </li>
        </ul>
        </div>
      )}
    </>
  );
}

export default ProfileButton;
