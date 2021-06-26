import React from 'react';
// import { useParams } from 'react-router-dom';
// import sessionReducer from '../../../../clevernote/src/store/session';
// import { NotesContext } from '../../context/context';
import './Notes.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllNotes, noteCreate } from '../../store/notes'
import { getUsers } from '../../store/users'
import { getAllNotebooks, notebookCreate } from '../../store/notebook'


const Notes = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [notebook, setNotebook] = useState('');
    const notesStore = useSelector(state => Object.values(state.notes));
    const userId = useSelector(state => state.session.user.id);
    const notebooks = useSelector(state => Object.values(state.notebooks));
    const dispatch = useDispatch();
    const allNotes = useSelector(state => Object.values(state.notes));
    // console.log(allNotes)
    const currentUserNote = allNotes.find(note => note?.userId === userId)
    console.log(currentUserNote);
    // const currentNote = currentUserNotes[0];
    const currentUserNotebook = notebooks.find(notebook => notebook?.id === currentUserNote?.notebookId)
    const notebookId = currentUserNote?.notebookId === false ? 1 : currentUserNote?.notebookId;

    useEffect(() => {
        // dispatch(getAllNotes());
        dispatch(getAllNotebooks());
        // dispatch(getUsers());
        // dispatch(noteCreate());
    }, [dispatch, setTitle, setContent, setNotebook])


const onSubmit = (e) => {
        e.preventDefault();
        const note = {userId, title, content, notebookId}
        const notebookSubmit = {userId, notebook}
        dispatch(noteCreate(note))
        dispatch(notebookCreate(notebookSubmit))
        setContent('')
        setTitle('')
        setNotebook('')
        dispatch(getAllNotes());
        // setUpdatedAt('')
    };

const titleChange = (e) => {
        setTitle(e.target.value)
    }

const contentChange = (e) => {
        setContent(e)
        console.log(content)
    }

const notebookChange = (e) => {
        setNotebook(e.target.value)
}

    return (
      <form className="add-form" onSubmit={onSubmit}>
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
                    <input className="note__input" placeholder="Title"
                    value={title} onChange={(e) => titleChange(e)}
                    />
                     {/* {onBlur={() => handleUpdatedNote('title)}} */}
                </div>
                <div className="note__body-content">
                    {/* <textarea className="note-txt" placeholder="Start writing" /> */}
                    <ReactQuill className="note-txt" placeholder="Write a Joke Bitch"
                    value={content} onChange={(e) => contentChange(e)}
                    />
                    {/* onChange={e => setNoteText(e)} */}
                     {/* {onBlur={() => handleUpdatedNote('desc)}} */}
                </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                    <div>
                        <input placeholder="add notebook" value={notebook} onChange={(e) => setNotebook(e.target.value)}/>
                    </div>
            </div>
        </div>
     </form>
    )
}

    // const [error, setError] = useState(null);
    // const [isArchive, setIsArchive] = useState(0);
    // useEffect(() => {
    //     if(location.note) {
    //         setTitle(location.note.title)
    //         setDesc(location.note.desc)
    //         setUpdatedAt(location.note.updatedAt)
    //         setIsArchive(location.note.archive)
    //     }
    // }, [location.note])

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

    // const resetState = () => {
    //     setTitle('');
    //     setDesc('');
    //     setUpdatedAt('');
    //     setIsArchive(0);
    //     setError(null);

    // }
//Title: value={title}
//textarea value = {desc}

export default Notes;
