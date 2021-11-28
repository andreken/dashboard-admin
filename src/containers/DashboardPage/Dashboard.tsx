import React from "react";
import { CssBaseline, Box } from '@mui/material';

import { TUserState } from '../../redux/state/user.state';
import Sidebar from "../../components/Dashboard/Sidebar";
import Content from "../../components/Dashboard/Content";
import Header from "../../components/Dashboard/Header";
import { TSection } from './index'

interface IProps {
  section: TSection,
  loading: boolean,
  userData: TUserState,
  fnLogout: () => void,
}

const Dashboard = ({ section, loading, userData, fnLogout }: IProps) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header loading={loading} userData={userData} fnLogout={fnLogout} />
      <Sidebar section={section} />
      <Content section={section} />
    </Box>
  );
}

export default Dashboard;