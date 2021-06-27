import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Sidenavbar from "./components/Sidenavbar/Sidenavbar";
import Notebooks from "./components/Notebooks/Notebooks";
import Notes from "./components/Notes/Notes";
import Header from "./components/NotesTracker/Header";
import Tasks from "./components/NotesTracker/Tasks";
import AddTask from "./components/NotesTracker/AddTask";
import EditNotes from "./components/EditNotes/EditNotes"
import { HomeIndex } from "./components/Homepage/homepage";
// use this thunk action inside of App.js after the App component's first render.
function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState( // now can pass down to componenets as props
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

// add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 1000) + 1 // MY backend will create ID on it's own
  const newTask = { id, ...task }
  setTasks([...tasks, newTask])
}
// delete task
const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
    }

// toggle reminder

const toggleReminder = (id) => {
  setTasks(
    tasks.map((task) =>
      task.id === id ? { ...task, reminder: !task.reminder } : task
    )
  )
}

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
          <Switch>
          <Route exact path='/'>
            <HomeIndex />
          </Route>
            <Route path="/signup">
               <SignupFormPage />
           </Route>
           <Route exact path="/test-notes">
           <div className='container'>
              <Header onAdd={() => setShowAddTask(!showAddTask)}
              showAdd={showAddTask} />
              {showAddTask && <AddTask onAdd={addTask} />}
              <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
              <Header />
              <Tasks tasks={tasks}/>
            </div>
          </Route>
          <div className="evernote">
            <Route path="/all-notes">
              <Sidenavbar />
              <Notebooks title="All Notes"/>
              <Route exact path="/all-notes/:noteid">
                <Notes />
              </Route>
              <Route exact path="/all-notes/edit/:noteid">
                <EditNotes />
              </Route>
            </Route>
            <Route path="/notebooks">
              <Sidenavbar />
              <Notebooks title="Notebooks" />
              <Route path="/notebooks/:id">
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
