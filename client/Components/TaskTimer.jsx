import React, { useState, useEffect } from 'react';
import { Button, Typography } from '@mui/material';

const TaskTimer = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (running) {
      intervalId = setInterval(() => {
        setTime(time + 1);
      }, 10);
    }
    return () => clearInterval(intervalId);
  }, [running, time]);

  const hours = Math.floor(time / 360000);
  const minutes = Math.floor((time % 360000) / 6000);
  const seconds = Math.floor((time % 6000) / 100);
  const milliseconds = time % 100;

  const startAndStop = () => {
    setRunning(!running);
  };

  const reset = () => {
    setTime(0);
  };

  return (
    <div className="stopwatch-container">
      <Typography
        variant="h1"
        sx={{ fontSize: '10rem' }}
        className="stopwatch-time"
      >
        {hours}:{minutes.toString().padStart(2, '0')}:
        {seconds.toString().padStart(2, '0')}:
        {milliseconds.toString().padStart(2, '0')}
      </Typography>
      <div className="stopwatch-buttons">
        <Button
          variant="contained"
          className="stopwatch-button"
          onClick={startAndStop}
        >
          {running ? 'Stop' : 'Start'}
        </Button>
        <Button
          variant="contained"
          className="stopwatch-button"
          onClick={reset}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default TaskTimer;
