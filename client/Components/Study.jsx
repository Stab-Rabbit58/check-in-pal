import React, { useState, useEffect } from 'react';
import TaskTimer from './TaskTimer.jsx';
import NavBar from './NavBar.jsx';
import TaskWindow from './ToDoList.jsx';


const Study = () => {
  // add a current task selector
  // add task list component
  return (
    <div className="study-page">
      <NavBar />
      <div className="study-container">
        <div className="study-task-window">
          <TaskWindow />
        </div>
        <div className="study-timer">
          <TaskTimer />
        </div>
      </div>
    </div>
  );
};

export default Study;
