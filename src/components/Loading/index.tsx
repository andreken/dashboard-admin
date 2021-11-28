import React from 'react'
import styled from '@emotion/styled'
import { CircularProgress } from '@mui/material';

const StyledRoot = styled.div({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
})

const Loading = () => (
  <StyledRoot>
    <CircularProgress />
  </StyledRoot>
)

export default Loading