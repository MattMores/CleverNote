import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
// add a React functional component named Navigation
function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
// Only contain navigation links to the login and signup routes when there is no session user
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup" className='nav-btn-2'>Sign Up</NavLink>
      </>
    );
  }
  return (
    <>
        <header className='upperNav'>
          <div class="header">
              <img src="https://i.ibb.co/XtmK2Dp/63823-Clever-Note-RK-01.jpg" alt="logo" />
              {/* <h1>My website name</h1> */}
          </div>
        </header>
        <header className='lowerNav'>
            <div className='lowerNav__div'>
                <ul>
                    <li>
                        {/* {sessionUser &&
                            <button className='nav-btn'>
                                <NavLink to='/songs/add'>Add Song</NavLink>
                            </button>
                        } */}
                        <button className='nav-btn'>
                            <NavLink to='/'>Home</NavLink>
                        </button>
                        <button className='nav-btn'>
                            <NavLink to='/all-notes'>All Notes</NavLink>
                        </button>
                        <button className='nav-btn'>
                            <NavLink exact to="/standup-set">Stand-Up</NavLink>
                        </button>
                        {isLoaded && sessionLinks}
                    </li>
                </ul>
            </div>
        </header>
    </>
);
}

export default Navigation;
