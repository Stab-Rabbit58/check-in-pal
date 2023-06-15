import React from 'react';
import Landing from './Components/Landing.jsx';
import SwitchDisplay from './Components/SwitchDisplay.jsx';
import Login from './Components/Login.jsx';
import SignUp from './Components/SignUp.jsx';
import NavBar from './Components/NavBar.jsx';
import SearchBar from './Components/SearchBar.jsx';
import Home from './Components/Home.jsx';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import TaskTimer from './Components/TaskTimer.jsx';
import Study from './Components/Study.jsx';
import TaskWindow from './Components/ToDoList.jsx';
import SpotifyMini from './Components/SpotifyMini.jsx';

const App = () => {
  // create state called 'activity' and assign it to empty string and it's setter function as 'setActivity'
  const [activity, setActivity] = useState('');

  // return the routes , each rendering a component at their respective paths
  return (
    // create routes
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* <Route path="/" element={<Study />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/home"
          element={
            <div>
              <Home /> <SpotifyMini />
            </div>
          }
        />
        <Route
          path="/todo"
          element={
            <div>
              <TaskWindow /> <SpotifyMini />
            </div>
          }
        />
        <Route
          path="/study"
          element={
            <div>
              <Study /> <SpotifyMini />
            </div>
          }
        />
      </Routes>
    </>
  );
};

export default App;
