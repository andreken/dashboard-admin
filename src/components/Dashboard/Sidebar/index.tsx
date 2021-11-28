import React from "react";
import { Link } from "react-router-dom";
import { 
  Drawer, Box, Toolbar,
  List, ListItem, ListItemIcon, ListItemText,
} from '@mui/material';
import TaskIcon from '@mui/icons-material/Task';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';

import { TSection } from '../../../containers/DashboardPage'

interface IProps {
  section: TSection
}

const drawerWidth = 200;

const Sidebar = ({ section }: IProps) => {

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
          <ListItem selected={section === 'todos'} button key='todos' component={Link} to='/'>
            <ListItemIcon>
              <TaskIcon />
            </ListItemIcon>
            <ListItemText primary='Todos' />
          </ListItem>
          <ListItem selected={section === 'photos'} button key='photos' component={Link} to='/photos'>
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