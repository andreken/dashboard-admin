import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { login } from '../../../redux/api';
import { selectSignInErrorMessage, selectSignInFailed, selectSignInStarted } from '../../../redux/selectors';
import useEmailValidation from '../../../utils/hooks/useEmailValidation';
import usePasswordValidation from '../../../utils/hooks/usePasswordValidation';

import LoginForm from './LoginForm';

const LoginFormContainer = () => {

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showValidation, setValidation] = useState<boolean>(false);
  const { validEmail, errorEmail } = useEmailValidation({ email: email });
  const { errorPassword } = usePasswordValidation({ firstPassword: password, secondPassword: password, numberValidation: true });

  const dispatch = useDispatch();
  const signInStarted = useSelector(selectSignInStarted)
  const signInFailed = useSelector(selectSignInFailed)
  const signInErrorMessage = useSelector(selectSignInErrorMessage)

  const isFormDataValid = (): boolean => {
    return errorEmail === '' && errorPassword === '';
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setValidation(true);
    if(isFormDataValid()){
      dispatch(login(email, password))
    }
  }

  return <LoginForm
    email={email}
    validEmail={validEmail}
    errorEmail={errorEmail}
    password={password}
    showPassword={showPassword}
    showValidation={showValidation}
    errorPassword={errorPassword}
    setEmail={setEmail}
    setPassword={setPassword}
    setShowPassword={setShowPassword}
    handleSubmit={handleSubmit}
    signInStarted={signInStarted}
    signInFailed={signInFailed}
    signInErrorMessage={signInErrorMessage}
  />
}

export default LoginFormContainer;