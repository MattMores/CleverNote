import React from 'react';
// import { NotesContext } from '../../context/context';
import './Notebooks.css';
//import useEffect, useState, usecontext
//import useRouteMatch, useHistory
//import { BASE_URL, GET_ALL_NOTES, GET_TRASH_NOTES}
//import { getRequest }
// import {NotesContext }
// import {NavLink}

const Notebook = (props) => {
    const {title} = props;
    // const [error, setError] = useState(null)
    // const notesContext = useContext(NotesContext);
    // const match = useRouteMatch();
    // const history = useHistory();
    // useEffect(() => {
    //     console.log(match.url);
    //     getNotes()
    // }, [match.url])

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
                        notes.Context.notesState.length
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
                <div className="note-card">
                    <div className="note-card__head">
                        <div className="note-card__title">
                            Note One
                            {/* {note.title} */}
                        </div>
                        <div className="note-card__desc">
                            Some description
                            {/* {note.desc} */}
                        </div>
                    </div>
                    <div className="note-card__date">
                        Today's Date
                        {/* {listFormatDate(note.updatedAt)} - see helper function */}
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
