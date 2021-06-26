import React from 'react';
import './EditNotes.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

// import { grabOneNote } from '../../store/notes';
import { useParams } from 'react-router';
import { getAllNotes } from '../../store/notes';
import { noteUpdate } from '../../store/notes';

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

    const [title, setTitle] = useState(currentNote?.title);
    const [content, setContent] = useState(currentNote?.content);

    const onSubmit = (e) => {
        e.preventDefault();
        const note = {id:noteid, title, content, notebookId:currentNote, userId:user.id}
        dispatch(noteUpdate(note))
        setContent('')
        setTitle('')
    };

    useEffect(() => {
        if (user) {
        dispatch(getAllNotes(user.id));
        }
        setContent(currentNote?.content)
        setTitle(currentNote?.title)
    }, [currentNote?.title, currentNote?.content, dispatch, user]);

    useEffect(() => {
        if (content) {
        let cleanContent = [content]
        for (let index = 0; index < content.length; index++) {
        const letter = content[index];
        cleanContent[0] = cleanContent[0].replace("<strong>","").replace("</strong>","").replace("<p>", "")
        .replace("<em>", "").replace("</em>", "").replace("<u>","").replace("</u>","").replace("</p>", "").replace("<a", "").replace("</a>", "")
        .replace("<br>", "").replace("<ul>", "").replace("</ul>", "").replace("<li>", "").replace("</li>", "").replace(">", "")
        .replace("</p", "").replace("<", "").replace("/", "")
        }
        setContent(cleanContent[0])
    }
    }, [content])

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
                    onChange={e => setTitle(e.target.value)} value={title}
                    />
                     {/* {onBlur={() => handleUpdatedNote('title)}} */}
                </div>
                <div className="note__body-content">
                    {/* <textarea className="note-txt" placeholder="Start writing" /> */}
                    <textarea className="note-txt" placeholder="Write a Joke"
                    onChange={e => setContent(e.target.value)} value={content}
                  // console.log(content.split("</p>" || "</a>" || "<br>" || "</ul>" || "</li>" || "<p>" || "<a>" || "<ul>" || "<li>"))
                //   for (let index = 0; index < array.length; index++) {
                //       const element = array[index];

                //   }
                //   content.replace("<p>", "").replace("</p>", "").replace("<a", "").replace(">", "").replace("</a>", "")
                    >
                    </textarea>
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
