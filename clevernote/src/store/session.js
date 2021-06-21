// frontend/src/store/session.js
import { csrfFetch } from './csrf';

const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';

const setUser = (user) => { //sets session user in the session slice of state
  return {
    type: SET_USER,
    payload: user,
  };
};

const removeUser = () => { //removes session user
  return {
    type: REMOVE_USER,
  };
};

//call API to login
export const login = (user) => async (dispatch) => {
  const { credential, password } = user;
  const response = await csrfFetch('/api/session', {
    method: 'POST',
    body: JSON.stringify({
      credential,  // existing usernameor email
      password,
    }),
  });
  //set session user from response
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_USER:
      newState = Object.assign({}, state);
      newState.user = action.payload;
      return newState;
    case REMOVE_USER:
      newState = Object.assign({}, state);
      newState.user = null;
      return newState;
    default:
      return state;
  }
};
//add a thunk action that will call the Get /api/session
export const restoreUser = () => async dispatch => {
    const response = await csrfFetch('/api/session');
    const data = await response.json();
    //dispatch the action for setting the session user to the user in the response's body
    dispatch(setUser(data.user));
    return response;
  };
//Use the POST /api/users backend route to signup a user.
export const signup = (user) => async (dispatch) => {
  const { username, email, password } = user;
  // add a signup thunk action that will hit the signup backend route
  const response = await csrfFetch("/api/users", {
    method: "POST",
    body: JSON.stringify({
      // with username, email, and password inputs.
      username,
      email,
      password,
    }),
  });
  // After the response from the AJAX call comes back, parse the JSON body of the response
  const data = await response.json();
  // dispatch the action for setting the session user to the user in the response's body.
  dispatch(setUser(data.user));
  return response;
};
//add a logout thunk action that will hit the logout backend route.
export const logout = () => async (dispatch) => {
  const response = await csrfFetch('/api/session', {
    method: 'DELETE',
    //After the response from the AJAX call comes back
  });
  //dispatch the action for removing the session user.
  dispatch(removeUser());
  return response;
};


export default sessionReducer;
