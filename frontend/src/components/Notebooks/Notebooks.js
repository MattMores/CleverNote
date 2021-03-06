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
import { Link } from 'react-router-dom';

const Notebook = (props) => {
    const {title} = props;
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const notesStore = useSelector(state => Object.values(state.notes));
    const notes = notesStore.filter(note => {
        if ((note?.User?.id === user?.id)) {
            console.log(user.id)
            return note
        }
        else {
            return null
        }
    })

    // console.log(notes)
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
                {notes && notes.map(note => (
                <div className="note-card">
                <Link to={`/all-notes/edit/${note.id}`} style={{ color: "inherit", textDecoration: 'inherit'}}>
                    <div className="note-card__head">
                        <div className="note-card__title">
                            {note.title}
                        </div>
                        <div className="note-card__desc"
                        dangerouslySetInnerHTML={{__html : note.content}}
                        >
                            {/* {note.content} */}
                        </div>
                    </div>
                    {/* <div className="note-card__date">
                        {note.createdAt}
                    </div> */}
                </Link>
                 </div>
                ))}
            </div>
        </div>
    )
}

export default Notebook;
