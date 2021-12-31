import React, { ReactNode } from "react";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

interface IProps {
  children: ReactNode
}

const Content = ({ children }: IProps) => {

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      { children }
    </Box>
  );
}

export default Content;