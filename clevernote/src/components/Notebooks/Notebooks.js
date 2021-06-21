import React from 'react';
import './Notebooks.css';

const Notebook = () => {
    return (
        <div className="note-list">
            <div className="note-list__header">
                <div className="note-list__header-title">
                    <h1 className="h1-note">All Notes</h1>
                </div>
                <div className="note-list__header-sub-head">
                    <div className="note-count">
                        2 Notes
                    </div>
                </div>
            </div>
            <div className="note-list__body">
                <div className="note-card">
                    <div className="note-card__head">
                        <div className="note-card__title">
                            Note One
                        </div>
                        <div className="note-card__desc">
                            Some description
                        </div>
                    </div>
                    <div className="note-card__date">
                        Today's Date
                    </div>
                </div>
                <div className="note-card">
                    <div className="note-card__head">
                        <div className="note-card__title">
                            Note One
                        </div>
                        <div className="note-card__desc">
                            Some description
                        </div>
                    </div>
                    <div className="note-card__date">
                        Today's Date
                    </div>
                </div>
                <div className="note-card">
                    <div className="note-card__head">
                        <div className="note-card__title">
                            Note One
                        </div>
                        <div className="note-card__desc">
                            Some description
                        </div>
                    </div>
                    <div className="note-card__date">
                        Today's Date
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notebook;
