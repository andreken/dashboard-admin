import React from "react";
import { Switch, Route } from 'react-router-dom'
import { Box, Toolbar } from '@mui/material';

import { PHOTOS_PATH, TODOS_PATH } from "../../../utils/const";

const Todos = React.lazy(() => import('../Content/Todos'))
const Photos = React.lazy(() => import('../Content/Photos'))

const Content = () => {

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      <Switch>
        <Route exact path={TODOS_PATH} component={Todos} />
        <Route exact path={PHOTOS_PATH} component={Photos} />
      </Switch>
    </Box>
  );
}

export default Content;