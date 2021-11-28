import React, { useEffect } from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import { green, red } from '@mui/material/colors';

import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../../../../redux/api';
import { selectTodosFetchStarted, selectTodosFetchSuccess, selectTodosList } from '../../../../redux/selectors';
import { Skeleton } from '@mui/material';

const limit = 20

const Todos = () => {

  const dispatch = useDispatch();
  const fetchSuccess = useSelector(selectTodosFetchSuccess)
  const fetchStarted = useSelector(selectTodosFetchStarted)
  const todosList = useSelector(selectTodosList)

  useEffect(() => {
    if(!fetchSuccess) {
      dispatch(fetchTodos(limit))
    }
  }, [dispatch, fetchSuccess])
  
  return (
    <List sx={{ width: '100%', maxWidth: 600 }}>
      {
        fetchSuccess && todosList.map(todo => (
          <ListItem key={todo.id}>
            <ListItemAvatar>
              <Avatar sx={{ backgroundColor: todo.completed ? green[500] : red[500] }}>
                { todo.completed ? <AssignmentTurnedInIcon /> : <AssignmentLateIcon /> }
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={todo.title} />
          </ListItem>
        ))
      }
      {
        fetchStarted && [...new Array(limit)].map((el, index) => (
          <ListItem key={index}>
            <ListItemAvatar>
              <Skeleton variant="circular" width={40} height={40} />
            </ListItemAvatar>
            <Skeleton variant="rectangular" width={500} height={30} />
          </ListItem>
        ))
      }
    </List>
  )
}

export default Todos