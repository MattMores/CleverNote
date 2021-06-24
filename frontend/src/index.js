import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ModalProvider } from "./context/Modal";
import * as userActions from "./store/users";
import * as notesActions from "./store/notes";
import configureStore from "./store";
//import all actions from the session.js file into the frontend applicaiton entry file
import { restoreCSRF, csrfFetch } from "./store/csrf";
import * as sessionActions from "./store/session";
// import { NotesContext } from "./context/context"
// import NoteReducer

const store = configureStore();

if (process.env.NODE_ENV !== "production") {
  restoreCSRF();

  window.csrfFetch = csrfFetch;
  window.store = store;
    //attach the actions to the window at the key of sessionActions
  window.sessionActions = sessionActions;
  window.userActions = userActions;
  window.notesActions = notesActions;
}

// const initialState =[]

function Root() {
  // const [notes, notesDispatch] = useReducer(NoteReducer, initialState);
  return (
    <Provider store={store}>
      <ModalProvider>
      {/* <NotesContext.Provider value={{notesState: notes, notesDispatch}}> */}
        <BrowserRouter>
          <App />
        </BrowserRouter>
      {/* </NotesContext.Provider> */}
      </ModalProvider>
    </Provider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
