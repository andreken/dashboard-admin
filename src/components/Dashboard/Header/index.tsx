import React from "react";
import { AppBar, Toolbar, Box, Typography, Skeleton, Stack, Button } from "@mui/material";

import { TUserState } from '../../../redux/state/user.state';

interface IProps {
  loading: boolean,
  userData: TUserState,
  fnLogout: () => void,
}

const Dashboard = ({ loading = false, userData = null, fnLogout }: IProps) => {

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <Box display='flex' justifyContent='space-between' alignItems='center' width='100%'>
          <Typography variant="h4" noWrap component="div">
            Dashboard
          </Typography>
          <Box display='flex'>
            <Box marginRight='2rem'>
              {
                loading || !userData ?
                (
                  <>
                    <Skeleton height={24} width={200} style={{ marginBottom: 6, backgroundColor: 'rgba(255,255,255,.5)' }} />
                    <Skeleton height={24} width={200} style={{ backgroundColor: 'rgba(255,255,255,.5)' }}/>
                  </>
                ) :
                (
                  <>
                    <Typography variant='body1'>{userData?.email}</Typography>
                    <Typography variant='body1'>{`${userData?.firstName} ${userData?.lastName}`}</Typography>
                  </>
                )
              }
            </Box>
            <Stack spacing={2} justifyContent='center'>
              <Button variant="contained" onClick={fnLogout}>Logout</Button>
            </Stack>
          </Box>        
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default Dashboard;