import React from 'react'
import { Link } from "react-router-dom";
import styled from '@emotion/styled'
import { Typography, Button } from '@mui/material'
import { ArrowRightAlt } from '@mui/icons-material'

const StyledRoot = styled.div({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})

const NotFound = () => (
  <StyledRoot>
    <Typography variant='h1' color="error">404</Typography>
    <Typography variant='h4' color="error" style={{ marginBottom: '2rem' }}>Page not found</Typography>
    <Button variant="outlined" color="error" endIcon={<ArrowRightAlt />} component={Link} to='/'>Go Home</Button>
  </StyledRoot>
)

export default NotFound
