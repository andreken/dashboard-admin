import React from 'react';
import { Link } from "react-router-dom";
import {
  Avatar, Button, 
  TextField,
  Typography, Grid,
  InputAdornment, IconButton, Alert
} from '@mui/material';
import { LockOutlined, Visibility, VisibilityOff } from '@mui/icons-material';

import { TFormFields } from './index'

import '../Form.scss';

interface IProps {
  formFields: TFormFields,
  validEmail: boolean,
  errorEmail: string,
  showPassword: boolean,
  errorPassword: string,
  showValidation: boolean,
  setFieldValue: (field: string, value: string) => void
  setShowPassword: (value: boolean) => void,
  handleSubmit: (event: React.FormEvent) => void,
  signUpStarted: boolean,
  signUpFailed: boolean,
  signUpErrorMessage: string | null,
}

function RegisterForm({
  formFields, validEmail, errorEmail, showPassword, errorPassword, showValidation,
  setFieldValue, setShowPassword, handleSubmit,
  signUpStarted, signUpFailed, signUpErrorMessage,
}: IProps) {

  const { firstName, lastName, email, password, confirmPassword } = formFields

  return (
      <div className="access-form-wrapper form--register">
        <Avatar sx={{ width: 48, height: 48 }} className="access-form-avatar">
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className="access-form" onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={(e) => setFieldValue('firstName', e.target.value)}
                error={showValidation && !firstName}
                helperText={showValidation && !firstName && 'This field is required'}
                label="First Name"
                autoComplete="fname"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                name="lastName"
                value={lastName}
                onChange={(e) => setFieldValue('lastName', e.target.value)}
                error={showValidation && !lastName}
                helperText={showValidation && !lastName && 'This field is required'}
                label="Last Name"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                name="email"
                value={email}
                onChange={(e) => setFieldValue('email', e.target.value)}
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
                onChange={(e) => setFieldValue('password', e.target.value)}
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
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="password"
                name="password"
                value={confirmPassword}
                onChange={(e) => setFieldValue('confirmPassword', e.target.value)}
                label="Confirm Password"
                type="password"
                autoComplete="confirm-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="access-form__btn-submit"
            disabled={signUpStarted}
          >
            Sign Up
          </Button>
          <div className="access-form__error-wrapper">
            { signUpFailed && signUpErrorMessage &&
              <Alert severity="error">{signUpErrorMessage}</Alert>
            }
          </div>
          <Link to="/login">
            Already have an account? Sign in
          </Link>
        </form>
      </div>
  );
}

export default RegisterForm;