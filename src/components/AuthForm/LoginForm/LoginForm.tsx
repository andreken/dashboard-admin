import React from 'react';
import { Link } from "react-router-dom";
import {
  Avatar, Button, 
  TextField,
  Typography, Grid,
  InputAdornment, IconButton, Alert
} from '@mui/material';
import { LockOutlined, Visibility, VisibilityOff } from '@mui/icons-material';

import '../Form.scss';

interface IProps {
  email: string,
  validEmail: boolean,
  errorEmail: string,
  password: string,
  showPassword: boolean,
  errorPassword: string,
  showValidation: boolean,
  setEmail: (value: string) => void,
  setPassword: (value: string) => void,
  setShowPassword: (value: boolean) => void,
  handleSubmit: (event: React.FormEvent) => void,
  signInStarted: boolean,
  signInFailed: boolean,
  signInErrorMessage: string | null,
}

function LoginForm({
  email, validEmail, errorEmail, password, showPassword, errorPassword, showValidation,
  setEmail, setPassword, setShowPassword, handleSubmit,
  signInStarted, signInFailed, signInErrorMessage,
}: IProps) {

  return (
      <div className="access-form-wrapper form--login">
        <Avatar sx={{ width: 48, height: 48 }} className="access-form-avatar">
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className="access-form" onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={showValidation && !validEmail}
                helperText={showValidation && errorEmail}
                label="Email Address"
                autoComplete="email"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={showValidation && errorPassword !== ''}
                helperText={showValidation && errorPassword}
                label="Password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword(!showPassword)}
                        onMouseDown={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="access-form__btn-submit"
            disabled={signInStarted}
          >
            Sign In
          </Button>
          <div className="access-form__alert-wrapper">
            { signInFailed && signInErrorMessage &&
              <Alert severity="error">{signInErrorMessage}</Alert>
            }
          </div>
          <Link to="/register">
            Don't have an account? Sign Up
          </Link>
        </form>
      </div>
  );
}

export default LoginForm;