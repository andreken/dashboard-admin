import React from "react";
import { CssBaseline, Box } from '@mui/material';

import { TUserState } from '../../redux/state/user.state';
import Sidebar from "../../components/Dashboard/Sidebar";
import Content from "../../components/Dashboard/Content";
import Header from "../../components/Dashboard/Header";

interface IProps {
  loading: boolean,
  userData: TUserState,
  fnLogout: () => void,
}

const Dashboard = ({ loading, userData, fnLogout }: IProps) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header loading={loading} userData={userData} fnLogout={fnLogout} />
      <Sidebar />
      <Content />
    </Box>
  );
}

export default Dashboard;