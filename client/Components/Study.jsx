import React, { useState, useEffect } from 'react';
import TaskTimer from './TaskTimer.jsx';
import NavBar from './NavBar.jsx';
import TaskWindow from './ToDoList.jsx';

const Study = () => {
  // add a current task selector
  // add task list component
  return (
    <div className="study">
      <NavBar />
      <TaskWindow />
      <TaskTimer />
      <iframe
        style={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/playlist/2s9R059mmdc8kz6lrUqZZd?utm_source=generator"
        width="100%"
        height="352"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Study;
