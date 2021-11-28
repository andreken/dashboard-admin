import React from 'react';
import { Container } from '@mui/material';
import AuthForm from '../../components/AuthForm';

import './AuthPage.scss';

export type TForm = 'login' | 'register'

interface IProps {
  form: TForm
}

const AuthPage = ({ form }: IProps) => (
  <div className="auth-page">
    <Container className="auth-page-form-wrapper" component="main" maxWidth={form === 'login' ? "xs" : "sm" }>
      <AuthForm form={form} />
    </Container>
  </div>
)

export default AuthPage;
