import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Drawer, Box, Toolbar,
  List, ListItem, ListItemIcon, ListItemText,
} from '@mui/material';
import {
  Task as TaskIcon,
  PhotoLibrary as PhotoLibraryIcon,
} from '@mui/icons-material';

import { selectPathname } from "../../../redux/selectors/router.selectors";
import { PHOTOS_PATH, TODOS_PATH } from "../../../utils/const";

const drawerWidth = 200;

const Sidebar = () => {

  const pathname = useSelector(selectPathname)

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          <ListItem selected={pathname === TODOS_PATH} button key={TODOS_PATH} component={Link} to={TODOS_PATH}>
            <ListItemIcon>
              <TaskIcon />
            </ListItemIcon>
            <ListItemText primary='Todos' />
          </ListItem>
          <ListItem selected={pathname === PHOTOS_PATH} button key={PHOTOS_PATH} component={Link} to={PHOTOS_PATH}>
            <ListItemIcon>
              <PhotoLibraryIcon />
            </ListItemIcon>
            <ListItemText primary='Album' />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}

export default Sidebar;