import { csrfFetch } from "./csrf";

// Define Action Types as Constants // Like the domain name
const GET_ALL_NOTES = 'notes/GET_ALL_NOTES';
const ADD_NOTE = 'notes/ADD_NOTE';
const UPDATE_NOTE = 'notes/UPDATE_NOTE'
const DELETE_NOTE = 'note/DELETE_NOTE';
// const GET_ONE_NOTE = "notes/GET_ONE_NOTE";

// Define Action Creators // Thunk next will have to pass the users it takes
// in to the database
const setNotes = (notes) => ({
  type: GET_ALL_NOTES,
  notes, // payload
});

const addNote = (note) => ({
    type: ADD_NOTE,
    note
  });

  const updateNote = (note) => ({
    type: UPDATE_NOTE,
    note
  });

  const deleteNote = (noteId) => ({
    type: DELETE_NOTE,
    noteId,
  });

  // const getOneNote = (note) => ({
  //   type: GET_ONE_NOTE,
  //   note
  // });
// Define Thunk Creators
export const getAllNotes = () => async (dispatch) => {
  const res = await fetch('/api/notes/all'); // api/users we defined in backend
  // this works b/c we set a proxy in our package.json aka localhost:5000
  const notes = await res.json(); // b/c we res.json in the backend
  // we now have an array of users
  dispatch(setNotes(notes)); // setUsers action creator, passing in the users
  //we got from the backend
};

export const noteCreate = (note) => async (dispatch) => {
    console.log(note)
    const { userId, title, content, notebookId } = note; //notebookId
    const response = await csrfFetch("/api/notes/", {
        method: "POST",
        body: JSON.stringify({
            userId,
            title,
            content,
            notebookId
        }),
    });
    const newNote = await response.json();
    console.log(newNote)
    dispatch(addNote(newNote));
    // return response;
};

export const noteUpdate = (note) => async (dispatch) => {
  console.log(note)
  const { id, title, content, notebookId, userId } = note; //notebookId
  const response = await csrfFetch("/api/notes/", {
      method: "PUT",
      body: JSON.stringify({
          id,
          title,
          content,
          notebookId,
          userId
      }),
  });
  const updatedNote = await response.json();
  console.log(updatedNote)
  dispatch(updateNote(updatedNote));
  // return response;
};

export const deleteNotes = (id) => async (dispatch) => {
  await csrfFetch('/api/notes/', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id }),
  });

  dispatch(deleteNote(id));
};

// export const grabOneNote = (noteId) => async (dispatch) => {
//   const res = await fetch(`/api/notes/${noteId}`); // api/users we defined in backend
//   // this works b/c we set a proxy in our package.json aka localhost:5000
//   const note = await res.json(); // b/c we res.json in the backend
//   // we now have an array of users
//   if (res.ok) {
//     dispatch(getOneNote(note));
//   }// setUsers action creator, passing in the users
//   //we got from the backend
// };


// Define an initial state
const initialState = {}; // defining how you want your redux store to be created
// can add { user: null } ?

// Define a reducer
const notesReducer = (state = initialState, action) => {
let newState;
  switch (action.type) {
    case GET_ALL_NOTES:
      const allNotes = {};
      action.notes.forEach((note) => { // normalize the state
        allNotes[note.id] = note;
      });
      return { // actions.users is coming in as an array so we'll
        // have to create some sort of object and spread out that object
        ...state, // updated version of the state
        ...allNotes,
      };
    case ADD_NOTE:
        newState = {}
        // console.log(action.note)
        newState = {...state, [action.note.id] : action.note}
        return newState;
    case UPDATE_NOTE:
        const { note } = action
        newState = {...state, [note.id] : note}
        return newState;
    case DELETE_NOTE:
        delete state[action.noteId.id];
        return {
          ...state
        }
    // case GET_ONE_NOTE: {
    //   return {
    //     ...state,
    //     [action.note.id]: {
    //       ...state[action.note.id],
    //       ...action.note
    //     }
    //   }
    // }
    default: // action goes through entire reducer and slices of state
      return state;
  }
};

// Export the reducer
export default notesReducer;
