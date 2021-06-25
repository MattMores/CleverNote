import React from 'react';
import './EditNotes.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

// import { grabOneNote } from '../../store/notes';
import { useParams } from 'react-router';
import { getAllNotes } from '../../store/notes';
var _ = require('lodash');

const EditNotes = () => {
    const { noteid } = useParams();
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const notes = useSelector(state => Object.values(state.notes));
    console.log(notes);
    const currentNote = _.find(notes, function(note){
        // console.log(note)
        return note.id === Number(noteid)
    })
    console.log(currentNote);

    useEffect(() => {
        if (user) {
        dispatch(getAllNotes(user.id));
        }
    }, [dispatch, user]);

    return (
      <form className="add-form" onSubmit={""}>
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
                    value={currentNote && currentNote.title}
                    />
                     {/* {onBlur={() => handleUpdatedNote('title)}} */}
                </div>
                <div className="note__body-content">
                    {/* <textarea className="note-txt" placeholder="Start writing" /> */}
                    <textarea className="note-txt" placeholder="Write a Joke"
                    value={currentNote && currentNote?.content}
                    />
                    {/* onChange={e => setNoteText(e)} */}
                     {/* {onBlur={() => handleUpdatedNote('desc)}} */}
                </div>
                <button type="submit">Edit</button>
            </div>
        </div>
     </form>
    )
}

export default EditNotes;
