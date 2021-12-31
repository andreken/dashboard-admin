import React, { useEffect } from 'react'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../database";
import { history } from '../../redux'

import { TForm } from '../../containers/AuthPage'
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

import './Form.scss'

interface IProps {
  form: TForm
}

const AuthForm = ({ form }: IProps) => {

  const [user] = useAuthState(auth);

  useEffect(() => {
    if(user) history.push('/')
  }, [user])

  const Form = form === 'login' ? LoginForm : RegisterForm;

  return (
    <Form />
  )
}

export default AuthForm
