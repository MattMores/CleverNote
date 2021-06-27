import React from 'react';
import './Sidenavbar.css';
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getAllNotebooks } from '../../store/notebook'
import { useEffect } from "react"
import { getAllNotes } from '../../store/notes';

// import { postRequest }
// import { BASE_URL, CREATE_NOTE}
//import { NotesContext }
// import { useState, useContext }
// import {useHIstory}

const Sidenavbar = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const notebooksStore = useSelector(state => Object.values(state.notebooks))
    const notesStore = useSelector(state => Object.values(state.notes));
    const notebooks = notebooksStore.filter(notebook => {
        if ((notebook?.User?.id === user?.id)) {
            console.log(user.id)
            return notebook
        }
        else {
            return null
        }
    })

    useEffect(() => {
        if (user) {
        dispatch(getAllNotebooks(user.id));
        }
    }, [dispatch, user]);

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
                {/* //new note */}
                <Link to="/all-notes/:id" style={{ color: "inherit", textDecoration: 'inherit'}}>
                    <div className="create-note-btn">
                        <i className="far fa-plus-square"></i>
                        <div className="title">
                            New Note
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="sidenavbar-top__create-note">
                {/* <div className="create-note-btn" onClick={handleCreateNote}> */}
                {/* //new note */}
                {/* <Link to="/all-notes/:id" style={{ color: "inherit", textDecoration: 'inherit'}}>
                    <div className="create-note-btn-2">
                        <i className="far fa-plus-square"></i>
                        <div className="title">
                            New Standup
                        </div>
                    </div>
                    </Link> */}
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
                            <NavLink to="/standup-set"  style={{ color: "inherit", textDecoration: 'inherit'}}>
                            <i className="far fa-star"></i>
                            Set List
                            </NavLink>
                        </li>
                        {notebooks && notebooks.map(notebook => (
                        <li className="menu-li-3">
                            <NavLink to={`/notebooks/${notebook.id}`} style={{ color: "inherit", textDecoration: 'inherit'}}>
                            <i className="far fa-star"></i>
                            {notebook.title}
                            </NavLink>
                        </li>
                        ))}
                        {/* <li className="menu-li-4">
                            <NavLink to="/trash" style={{ color: "inherit", textDecoration: 'inherit'}}>
                            <i className="far fa-star"></i>
                            Notebook 2
                            </NavLink>
                        </li>
                        <li className="menu-li-4">
                            <NavLink to="/trash" style={{ color: "inherit", textDecoration: 'inherit'}}>
                            <i className="far fa-star"></i>
                            Notebook 3
                            </NavLink>
                        </li>
                        <li className="menu-li-4">
                            <NavLink to="/trash" style={{ color: "inherit", textDecoration: 'inherit'}}>
                            <i className="far fa-star"></i>
                            Notebook 4
                            </NavLink>
                        </li> */}
                    </ul>
                </div>
                <div className="sidenavbar-bottom">
                    <div className="sidenavbar-bottom__need-help">
                        <i className="fas fa-shoe-prints"></i>
                        Matt Mores Production
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidenavbar;

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
