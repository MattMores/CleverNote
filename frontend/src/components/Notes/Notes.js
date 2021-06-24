import React from 'react';
// import { NotesContext } from '../../context/context';
// import { useParams } from 'react-router-dom';
// import sessionReducer from '../../../../clevernote/src/store/session';
// import { NotesContext } from '../../context/context';
import './Notes.css';
// import { useLocation } from "react-router-dom"
// import {useState, useEffect}
//import { putRequest, deleteRequest } from API
//import { BASE_URL, UPDATE_NOTE,DELETE_NOTE }
//import useParams
// import { Notescontext }
// import useContext
// import useHistory

const Notes = () => {
    // const history = useHistory();
    // const location = useLocation();
    // const params = useParams();
    // const [title, setTitle] = useState('');
    // const [desc, setDesc] = useState('');
    // const notesContext = useContext(NotesContext);
    // const [updatedAt, setUpdatedAt] = useState('');
    // const [isArchive, setIsArchive] = useState(0);
    // const [error, setError] = useState(null);
    // useEffect(() => {
    //     if(location.note) {
    //         setTitle(location.note.title)
    //         setDesc(location.note.desc)
    //         setUpdatedAt(location.note.updatedAt)
    //         setIsArchive(location.note.archive)
    //     }
    // }, [location.note])

    // useEffect(() => {
    //     if (notesContext.notesState.length > 0) {
    //         const [selectednote] = notesContext.notesState.filter((e) => e._id === params.id);
    //         if (selectednote) {
    //             setTitle(selectednote.title)
    //             setDesc(selectednote.desc)
    //             setUpdatedAt(selectednote.updatedAt)
    //             setIsArchive(selectednote.archive)
    //         }
    //     }
    // }, [notesContext.netesState])

    // const handleTitleChange = (e) => {
    //     setTitle(e.target.value)
    // }

    // const handleDescChange = (e) => {
    //     setDesc(e.target.value)
    // }

    // const handleUpdateNote = async (key) => {
    //     let query = {};
    //     if(key === 'title'){
    //         query['title'] = title;
    //     } else if (key === 'desc'){
    //         query['desc'] = desc;
    //     }
    //     const response = await putRequest(`${BASE_URL}${UPDATE_NOTE}${params.id}`, query);
    //     if (response.error) {
    //         setError(response.error);
    //         return false;
    //     }
    //     NotesContext.notesDispatch({ type: 'updateNoteSuccess', payload: response, id: params.id})
    // }

// locaiton.note is from sideNaveBar

// const handleArchiveNote = async () => {
//     let query = {
//         archive: 1
//     };
//     const response = await putRequest(`${BASE_URL}${UPDATE_NOTE}${params.id}`, query);
//     if(response.error) {
//         setError(response.error);
//         return false;
//     }
//     NotesContext.notesDispatch({ type: 'archiveNOteSuccess', id: params.id});
//     resetState();
//     history.pushState('/all-notes')
// }

// const handleUnArchiveNote = async () => {
//     let query = {
//         archive: 0
//     }

//     const response = await putRequest(`${BASE_URL}${UPDATE_NOTE}$params.id`, query);
//     if (response.error) {
//         setError(response.error);
//         return false
//     }
//     NotesContext.notesDispatch({ type: 'archiveNoteSuccess', id: params.id})
//     resetState();
//     history.pushState('/trash')
// }

// const handleDeleteNote = async () => {
//     const response = await deleteRequest(`${BASE_URL}${DELETE_NOTE}${params.id}`);
//     if (response.error) {
//         MediaStreamErrorEvent(response.error);
//         return false;
//     }
//     NotesContext.notesDispatch( { type: 'deleteNoteSuccess', id: response})
//     resetState();
//     history.pushState('/trash');
// }

//     const resetState = () => {
//         setTitle('');
//         setDesc('');
//         setUpdatedAt('');
//         setIsArchive(0);
//         setError(null);

//     }

    return (
        <div className="note">
            <div className="note__header">
                <div className="note__header-date">
                Last edited on updatedAt
                {/* {noteFormatDate(updatedAt)} - see helper funciton */}
                </div>
                <div className="note__header-btn">
                    {/* {!isArchive ? "first button" : "second two buttons"} */}
                    <div className="action-btn">
                {/* onClick={handleArchiveNote}*/}
                        <i className="far fa-star"></i>
                    </div>
                    <div className="action-btn">
                 {/* onClick={handleUnArchiveNote}*/}
                        <i className="far fa-star"></i>
                    </div>
                    <div className="action-btn">
                 {/* onClick={handleDeleteNote}*/}
                        <i className="far fa-star"></i>
                    </div>
                </div>
            </div>
            <div className="note__body">
                <div className="note__body-head">
                    <input className="note__input" placeholder="Title" />
                    {/* {onChange={handlTitleChange}} */}
                     {/* {onBlur={() => handleUpdatedNote('title)}} */}
                </div>
                <div className="note__body-content">
                    <textarea className="note-txt" placeholder="Start writing" />
                    {/* {onChange={handlDescChange}} */}
                     {/* {onBlur={() => handleUpdatedNote('desc)}} */}
                </div>
            </div>
        </div>
    )
}

//Title: value={title}
//textarea value = {desc}

export default Notes;
