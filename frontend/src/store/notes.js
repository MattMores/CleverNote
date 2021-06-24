// Define Action Types as Constants // Like the domain name
const GET_ALL_NOTES = 'notes/GET_ALL_NOTES';

// Define Action Creators // Thunk next will have to pass the users it takes
// in to the database
const setNotes = (notes) => ({
  type: GET_ALL_NOTES,
  notes, // payload
});

// Define Thunk Creators
export const getAllNotes = () => async (dispatch) => {
  const res = await fetch('/api/notes/all'); // api/users we defined in backend
  // this works b/c we set a proxy in our package.json aka localhost:5000
  const notes = await res.json(); // b/c we res.json in the backend
  // we now have an array of users
  dispatch(setNotes(notes)); // setUsers action creator, passing in the users
  //we got from the backend
};

// Define an initial state
const initialState = {}; // defining how you want your redux store to be created
// can add { user: null } ?

// Define a reducer
const notesReducer = (state = initialState, action) => {
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
    default: // action goes through entire reducer and slices of state
      return state;
  }
};

// Export the reducer
export default notesReducer;
