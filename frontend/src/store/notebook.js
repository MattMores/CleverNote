import { csrfFetch } from "./csrf";

// Define Action Types as Constants // Like the domain name
const GET_ALL_NOTEBOOKS = 'notebooks/GET_ALL_NOTEBOOKS';
const ADD_NOTEBOOK = 'notebooks/ADD_NOTEBOOK'

// Define Action Creators // Thunk next will have to pass the users it takes
// in to the database
const setNotebooks = (notebooks) => ({
  type: GET_ALL_NOTEBOOKS,
  notebooks, // payload
});

const addNotebook = (notebook) => ({
    type: ADD_NOTEBOOK,
    notebook
  });

// Define Thunk Creators
export const getAllNotebooks = () => async (dispatch) => {
  const res = await fetch('/api/notebooks'); // api/users we defined in backend
  // this works b/c we set a proxy in our package.json aka localhost:5000
  const notebooks = await res.json(); // b/c we res.json in the backend
  // we now have an array of users
  dispatch(setNotebooks(notebooks)); // setUsers action creator, passing in the users
  //we got from the backend
};

export const notebookCreate = (notebookz) => async (dispatch) => {
    const { userId, notebook } = notebookz;
    const response = await csrfFetch("/api/notebooks/", {
        method: "POST",
        body: JSON.stringify({
            userId,
            notebook,
        }),
    });
    const newNotebook = await response.json();
    dispatch(addNotebook(newNotebook));
    // return response;
};


// Define an initial state
const initialState = {}; // defining how you want your redux store to be created
// can add { user: null } ?

// Define a reducer
const notebooksReducer = (state = initialState, action) => {
let newState;
  switch (action.type) {
    case GET_ALL_NOTEBOOKS:
      const allNotebooks = {};
      action.notebooks.forEach((notebook) => { // normalize the state
        allNotebooks[notebook.id] = notebook;
      });
      return { // actions.users is coming in as an array so we'll
        // have to create some sort of object and spread out that object
        ...state, // updated version of the state
        ...allNotebooks,
      };
    case ADD_NOTEBOOK:
      newState = {}
      newState = {...state, [action.notebook.id] : action.notebook}
      return newState;
    default: // action goes through entire reducer and slices of state
      return state;
  }
};

// Export the reducer
export default notebooksReducer;
