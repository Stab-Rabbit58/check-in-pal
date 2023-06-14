import React, { useState, useRef } from "react";
import {
  List, ListItem, ListItemButton, ListItemIcon, ListItemText,
  Checkbox, IconButton, Button
} from '@mui/material';
import { CommentIcon } from '@mui/icons-material';


const TaskWindow = () => {

  const taskItemRef = useRef();

  const handleAdd = () => {

    const newTask = taskItemRef.current.value;

    // push to list array
    // rerender list array

  }

  const handleDelete = () => {

    // use index of list item
    // splice from list array
    // rerender list array

  }

  // Button: Add new task item
  // Text Input: Input new task 

  // List

  const list = [];

  // List items: task, checkmark button, delete button



  // function CheckboxList() {
  //   const [checked, setChecked] = React.useState([0]);

  //   const handleToggle = (value) => () => {
  //     const currentIndex = checked.indexOf(value);
  //     const newChecked = [...checked];

  //     if (currentIndex === -1) {
  //       newChecked.push(value);
  //     } else {
  //       newChecked.splice(currentIndex, 1);
  //     }

  //     setChecked(newChecked);
  //   };

  //   return (
  //     <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
  //       {[0, 1, 2, 3].map((value) => {
  //         const labelId = `checkbox-list-label-${value}`;

  //         return (
  //           <ListItem
  //             key={value}
  //             secondaryAction={
  //               <IconButton edge="end" aria-label="comments">
  //                 <CommentIcon />
  //               </IconButton>
  //             }
  //             disablePadding
  //           >
  //             <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
  //               <ListItemIcon>
  //                 <Checkbox
  //                   edge="start"
  //                   checked={checked.indexOf(value) !== -1}
  //                   tabIndex={-1}
  //                   disableRipple
  //                   inputProps={{ 'aria-labelledby': labelId }}
  //                 />
  //               </ListItemIcon>
  //               <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
  //             </ListItemButton>
  //           </ListItem>
  //         );
  //       })}
  //     </List>
  //   );
  // }

  // returning a div with question text

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



    </div>
  )
}

export default TaskWindow;