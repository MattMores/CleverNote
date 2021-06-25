import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import sessionReducer from './session';
import usersReducer from './users';
import notesReducer from "./notes";
import notebooksReducer from "./notebook"
//import reducer & set a key of session in combineReducer objec argument
const rootReducer = combineReducers({
  session: sessionReducer,
  users: usersReducer,
  notes: notesReducer,
  notebooks: notebooksReducer
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
