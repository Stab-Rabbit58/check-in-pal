import React, { useState, useEffect, useRef } from "react";
import {
  List, ListItem, ListItemButton, ListItemIcon, ListItemText,
  Checkbox, IconButton, Button, TextField
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { render } from 'react-dom';


const TaskWindow = () => {
  // State for list of items
  const [list, setList] = useState([]);
  const [renderList, setRenderList] = useState([]);
  const [checked, setChecked] = useState([]);
  const taskItemRef = useRef();

  // useEffect hook to check database for existing to do items on render
  // useEffect(() => {
  //   fetch('/todo')

  //     .then(response => console.log(response))
  // }, [])

  // checkbox for each task
  const handleCheck = (task) => {

    const newChecked = [...checked];

    if (!newChecked.includes(task)) {
      newChecked.push(task);
    } else {
      const idxLoc = newChecked.indexOf(task);
      newChecked.splice(idxLoc, 1);
    }

    setChecked(newChecked);
  }

  // Add new task
  const handleAdd = () => {

    const newTask = taskItemRef.current.value;
    setList([...list, newTask]);

  }

  // delete task
  const handleDelete = (idx) => {

    // delete from list array
    const newList = [...list];
    newList.splice(idx, 1);
    setList(newList);

    // account for checked tasks
    const newChecked = [...checked];

    if (newChecked.includes(idx)) {
      const idxLoc = newChecked.indexOf(idx);
      newChecked.splice(idxLoc, 1);
    }
    setChecked(newChecked);

  }

  useEffect(() => {

    const tempRenderList = list.map((task, idx) => {
      return (
        <ListItem
          key={idx}
          id={idx}
          secondaryAction={
            <IconButton
              edge='end'
              key={idx}
              className='deleteButton'
              onClick={() => handleDelete(idx)}>
              <DeleteIcon />
            </IconButton>
          }>
          <ListItemButton
            key={idx}
            className='checkButton'
            onClick={() => handleCheck(task)}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={checked.includes(task)}
                // tabIndex={-1}
                disableRipple
              />
            </ListItemIcon>
            <ListItemText id={`task-${idx}`} primary={`${task}`} />
          </ListItemButton>
        </ListItem>
      )
    })

    setRenderList(tempRenderList);

  }, [list, checked])

  return (
    <div className="todo">
      <h1 id="question">What are you going to do?</h1>
      <div className="newItem">
        <TextField
          inputRef={taskItemRef}
          label='What do you need to do?'
          style={{ margin: '10px' }}
        />
        <Button
          variant="contained"
          style={{ margin: '10px' }}
          onClick={handleAdd}>
          Add
        </Button>
      </div>
      <List>
        {renderList}
      </List>
    </div>
  )
}

export default TaskWindow;