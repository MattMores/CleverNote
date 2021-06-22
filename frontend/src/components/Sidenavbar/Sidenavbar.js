import React from 'react';
import './Sidenavbar.css';
import { NavLink } from "react-router-dom";
// import { postRequest }
// import { BASE_URL, CREATE_NOTE}
//import { NotesContext }
// import { useState, useContext }
// import {useHIstory}

const Sidenavbar = () => {
    // const notesContext = useContext(NotesContext);
    // const [error, setError] = useState(null);
    // const history = useHistory();

    // const handleCreateNote = async () => {
    //     const response = await postRequest(`${BASE_URL}${CREATE_NOTE}`);
    //     console.log(response);
    //     if(response.error){
    //         setError(response.error);
    //         return false;
    //     }
    //      if (response._id) {
    //          notesContext.notesDispatch({ type: 'createNoteSuccess', payload: response })
    //          history.pushState({
    //              pathname: `/all-notes/${response._id}`,
    //              note: response
    //          })
    //      }
    // }
    return (
        <div className="sidenavbar">
            <div className="sidenavbar-top">
                <div className="sidenavbar-top__profile">
                    <div className="profile-icon">
                        M
                    </div>
                    <div className="profile-title">
                        Matt Mores
                        <i className="fas fa-user-circle"></i>
                    </div>
                </div>
                <div className="sidenavbar-top__search">
                    <div className="search-block">
                        {/* <FontAwesomeIcon icon={faSearch} /> */}
                        <i className="fas fa-search"></i>
                        <input className="input" placeholder="Search" />
                    </div>
                </div>
                <div className="sidenavbar-top__create-note">
                {/* <div className="create-note-btn" onClick={handleCreateNote}> */}
                    <div className="create-note-btn">
                        <i className="far fa-plus-square"></i>
                        <div className="title">
                            New Note
                        </div>
                    </div>
                </div>
                <div className="sidenavbar-top__menu-item">
                    <ul>
                        <li className="menu-li-1">
                            <NavLink to="/all-notes" style={{ color: "inherit", textDecoration: 'inherit'}}>
                            <i className="far fa-star"></i>
                            All Notes
                            </NavLink>
                        </li>
                        <li className="menu-li-2">
                            <NavLink to="/thing-2"  style={{ color: "inherit", textDecoration: 'inherit'}}>
                            <i className="far fa-star"></i>
                            Thing 2
                            </NavLink>
                        </li>
                        <li className="menu-li-3">
                            <NavLink to="/thing-3" style={{ color: "inherit", textDecoration: 'inherit'}}>
                            <i className="far fa-star"></i>
                            Thing 3
                            </NavLink>
                        </li>
                        <li className="menu-li-4">
                            <NavLink to="/trash" style={{ color: "inherit", textDecoration: 'inherit'}}>
                            <i className="far fa-star"></i>
                            Trash
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="sidenavbar-bottom">
                    <div className="sidenavbar-bottom__need-help">
                        <i className="fas fa-shoe-prints"></i>
                        Matt Mores Production LLC
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidenavbar;