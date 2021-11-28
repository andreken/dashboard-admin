import React from "react";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Photos from './Photos'
import Todos from './Todos'
import { TSection } from '../../../containers/DashboardPage'

interface IProps {
  section: TSection
}

const Content = ({ section }: IProps) => {

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      {
        section === 'todos' ? (
          <Todos />
        ) : (
          <Photos />
        )
      }
    </Box>
  );
}

export default Content;