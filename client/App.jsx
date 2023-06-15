import React from 'react';
import Landing from './Components/Landing.jsx';
import SwitchDisplay from './Components/SwitchDisplay.jsx';
import ActivityDisplay from './Components/ActivityDisplay.jsx';
import CheckoutDisplay from './Components/CheckoutDisplay.jsx';
import Login from './Components/Login.jsx';
import SignUp from './Components/SignUp.jsx';
import NavBar from './Components/NavBar.jsx';
import Home from './Components/Home.jsx'
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import TaskTimer from './Components/TaskTimer.jsx';
import Study from './Components/Study.jsx';
import TaskWindow from './Components/ToDoList.jsx';

const App = () => {
  // create state called 'activity' and assign it to empty string and it's setter function as 'setActivity'
  const [activity, setActivity] = useState('');

  // return the routes , each rendering a component at their respective paths
  return (
    // create routes
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/checkin" />
        <Route path="/home" element={<Home />} />
        <Route path="/todo" element={<TaskWindow />} />
        <Route path="/studyzone" element={<Study />} />
      </Routes>
      {/* <SignUp/> */}
    </>
  );
};

export default App;
