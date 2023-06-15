import React, { useState, useEffect, useRef } from 'react';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
  IconButton,
  Button,
  TextField,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import { render } from 'react-dom';
import NavBar from './NavBar.jsx';

const TaskWindow = () => {
  // State for list of items
  const [list, setList] = useState([]);
  const [renderList, setRenderList] = useState([]);
  const [edit, setEdit] = useState([]);
  const [checked, setChecked] = useState([]);
  const taskItemRef = useRef();
  const updateRef = useRef();

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
  };

  // Add new task
  const handleAdd = () => {
    const newTask = taskItemRef.current.value;

    if (newTask !== '') {
      setList([...list, newTask]);
      taskItemRef.current.value = '';
    }
  };

  // edit task
  const handleEditOpen = (idx) => {
    // edit list is array that has boolean at index
    const editList = [...edit];
    editList[idx] = true;
    setEdit(editList);
  };

  // finish edit task
  const handleEditClose = (idx) => {
    // updated task from ref
    const updatedTask = updateRef.current.value;
    const newList = [...list];
    console.log('pre splice', newList);

    newList.splice(idx, 1, updatedTask);

    const editList = [...edit];
    editList[idx] = false;

    console.log('new List', newList);

    setEdit(editList), setList(newList);
  };

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
  };

  useEffect(() => {
    // make a post request to backend here

    /* 
    fetch('/todo', {
      Method: 'POST',
      'Content-Headers': '
    })

    */

    const tempRenderList = list.map((task, idx) => {
      if (!edit[idx]) {
        return (
          <ListItem key={idx} id={idx}>
            <ListItemButton
              key={idx}
              className="checkButton"
              onClick={() => handleCheck(task)}
            >
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
            <IconButton
              style={{ margin: 'auto 5px' }}
              edge="end"
              key={idx}
              className="editButton"
              onClick={() => handleEditOpen(idx)}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              style={{ margin: 'auto 5px' }}
              edge="end"
              key={idx}
              className="deleteButton"
              onClick={() => handleDelete(idx)}
            >
              <DeleteIcon />
            </IconButton>
          </ListItem>
        );
      } else {
        return (
          <ListItem>
            <TextField
              inputRef={updateRef}
              defaultValue={task}
              style={{ margin: '10px' }}
            />
            <IconButton
              style={{ margin: 'auto 5px' }}
              edge="end"
              key={idx}
              className="checkButton"
              onClick={() => handleEditClose(idx)}
            >
              <CheckIcon />
            </IconButton>
            <IconButton
              style={{ margin: 'auto 5px' }}
              edge="end"
              key={idx}
              className="deleteButton"
              onClick={() => handleDelete(idx)}
            >
              <DeleteIcon />
            </IconButton>
          </ListItem>
        );
      }
    });

    setRenderList(tempRenderList);
  }, [list, checked, edit]);

  return (
    <>
      <NavBar />
      <div className="todo">
        <h1 id="question">What are you going to do?</h1>
        <div className="newItem">
          <TextField
            inputRef={taskItemRef}
            label="What do you need to do?"
            style={{ margin: '10px' }}
          />
          <Button
            variant="contained"
            style={{ margin: '10px' }}
            onClick={handleAdd}
          >
            Add
          </Button>
        </div>
        <List>{renderList}</List>
      </div>
    </>
  );
};

export default TaskWindow;
