// Define Action Types as Constants // Like the domain name
const SET_USERS = 'users/SET_USERS';

// Define Action Creators // Thunk next will have to pass the users it takes
// in to the database
const setUsers = (users) => ({
  type: SET_USERS,
  users, // payload
});

// Define Thunk Creators
export const getUsers = () => async (dispatch) => {
  const res = await fetch('/api/users'); // api/users we defined in backend
  // this works b/c we set a proxy in our package.json aka localhost:5000
  const users = await res.json(); // b/c we res.json in the backend
  // we now have an array of users
  dispatch(setUsers(users)); // setUsers action creator, passing in the users
  //we got from the backend
};

// Define an initial state
const initialState = {}; // defining how you want your redux store to be created
// can add { user: null } ?

// Define a reducer
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      const allUsers = {};
      action.users.forEach((user) => { // normalize the state
        allUsers[user.id] = user;
      });
      return { // actions.users is coming in as an array so we'll
        // have to create some sort of object and spread out that object 
        ...state, // updated version of the state
        ...allUsers,
      };
    default: // action goes through entire reducer and slices of state
      return state;
  }
};

// Export the reducer
export default usersReducer;
