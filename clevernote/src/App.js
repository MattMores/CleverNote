import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Sidenavbar from "./components/Sidenavbar/Sidenavbar";
import Notebooks from "./components/Notebooks/Notebooks";
import Notes from "./components/Notes/Notes";
// use this thunk action inside of App.js after the App component's first render.
function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <div className="evernote">
          <Route path="/home">
            <Sidenavbar />
          </Route>
          <Route path="/home">
            <Notebooks />
          </Route>
          <Route path="/home">
            <Notes />
          </Route>
          </div>
        </Switch>
      )}
    </>
  );
}

export default App;
