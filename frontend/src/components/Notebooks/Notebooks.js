import React from 'react';
// import { NotesContext } from '../../context/context';
import './Notebooks.css';
//import useEffect, useState, usecontext
//import useRouteMatch, useHistory
//import { BASE_URL, GET_ALL_NOTES, GET_TRASH_NOTES}
//import { getRequest }
// import {NotesContext }
// import {NavLink}
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllNotes } from '../../store/notes';

const Notebook = (props) => {
    const {title} = props;
    const dispatch = useDispatch();
    const notes = useSelector(state => Object.values(state.notes));
    const user = useSelector(state => state.session.user);
    // const [error, setError] = useState(null)
    // const notesContext = useContext(NotesContext);
    // const match = useRouteMatch();
    // const history = useHistory();
    // useEffect(() => {
    //     console.log(match.url);
    //     getNotes()
    // }, [match.url])
    useEffect(() => {
        if (user) {
        dispatch(getAllNotes(user.id));
        }
    }, [dispatch, user]);


    // const getNotes = async () => {
    //     let endpoint = '';
    //     if(match.url == '/all-notes') {
    //         endpoint = GET_ALL_NOTES;
    //     }else if(match.url == '/trash') {
    //         endpoint = GET_TRASH_NOTES;
    //     }else {
    //         return;
    //     }
    //     const response = await getRequest(`${BASE_URL}${endpoint}`)
    //     if (response.error) {
    //         setError(response.error);
    //         return false;
    //     }
    //     notesContext.notesDispatch({ type: 'getAllNotesSuccess', payload: response });
    //     if(response.length > 0) {
    //     history.pushState({
    //         pathname: `${match.url}/${response[0]._id}`,
    //         note: response[0]
    //     })
    //     }
    // }
    return (
        <div className="note-list">
            <div className="note-list__header">
                <div className="note-list__header-title">
                    <h1 className="h1-note">{title}</h1>
                </div>
                <div className="note-list__header-sub-head">
                    <div className="note-count">
                        Total Notes: {notes.length}
                    </div>
                </div>
            </div>
            <div className="note-list__body">
                {/* {notesContext.notesState.length > 0 ? notesContext.notesState.map((note) => (
                  INSERT entire note-card div in here).
                  Change div to NavLink key ={note.id} to ={
                      pathname: `${match.url}/$note._id,
                      note:
                  }
                ): <div className="empty-state">No data found</div>
                */}
                {notes && notes.map(note => (
                <div className="note-card">
                    <div className="note-card__head">
                        <div className="note-card__title">
                            {note.title}
                            {/* {notes && notes.map(note => (
                                {}
                            ))} */}
                        </div>
                        <div className="note-card__desc">
                            {note.content}
                        </div>
                    </div>
                    <div className="note-card__date">
                        {note.createdAt}
                    </div>
                 </div>
                ))}
            </div>
        </div>
    )
}

export default Notebook;
