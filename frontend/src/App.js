import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Sidenavbar from "./components/Sidenavbar/Sidenavbar";
import Notebooks from "./components/Notebooks/Notebooks";
import Notes from "./components/Notes/Notes";
import Header from "./components/NotesTracker/Header"
import Tasks from "./components/NotesTracker/Tasks"
// use this thunk action inside of App.js after the App component's first render.
function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [tasks, setTasks] = useState(
    [
      {
          id: 1,
          text: 'Funny Joke 1',
          day: 'Feb 5th at 2:30 pm',
          reminder: true
      },
      {
          id: 2,
          text: 'Funny Joke 2',
          day: 'Feb 6th at 2:30 pm',
          reminder: true
      },
      {
          id: 3,
          text: 'Funny Joke 3',
          day: 'Feb 7th at 2:30 pm',
          reminder: true
      }
    ])
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
           <Route exact path="/test-notes">
           <div className='container'>
              <Header />
              <Tasks tasks={tasks}/>
              <Header />
              <Tasks tasks={tasks}/>
              <Header />
              <Tasks tasks={tasks}/>
              <Header />
              <Tasks tasks={tasks}/>
            </div>
          </Route>
          <div className="evernote">
            <Route path="/all-notes">
              <Sidenavbar />
              <Notebooks title="All Notes"/>
              <Route path="/all-notes/:id">
                <Notes />
              </Route>
            </Route>
            <Route path="/trash">
              <Sidenavbar />
              <Notebooks title="Trash" />
              <Route path="/trash/:id">
                  <Notes />
              </Route>
            </Route>
          </div>
        </Switch>
      )}
    </>
  );
}

export default App;
