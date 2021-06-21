import React from 'react';
import './Notes.css';

const Notes = () => {
    return (
        <div className="note">
            <div className="note__header">
                <div className="note__header-date">
                Last edited on (date)
                </div>
                <div className="note__header-btn">
                    <div className="action-btn">
                        <i className="far fa-star"></i>
                    </div>
                </div>
            </div>
            <div className="note__body">
                <div className="note__body-head">
                    <input className="note__input" placeholder="Title" />
                </div>
                <div className="note__body-content">
                    <textarea className="note-txt" placeholder="Start writing" />
                </div>
            </div>
        </div>
    )
}

export default Notes;
