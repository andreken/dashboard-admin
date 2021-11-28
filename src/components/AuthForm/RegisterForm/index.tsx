import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { register } from '../../../redux/api';
import { selectSignUpFailed, selectSignUpStarted, selectSignUpErrorMessage } from '../../../redux/selectors';
import useEmailValidation from '../../../utils/hooks/useEmailValidation';
import usePasswordValidation from '../../../utils/hooks/usePasswordValidation';

import RegisterForm from './RegisterForm';

const initFormFields = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

export type TFormFields = typeof initFormFields

const RegisterFormContainer = () => {

  const [formFields, setFormFields] = useState<TFormFields>(initFormFields);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showValidation, setValidation] = useState<boolean>(false);
  const { validEmail, errorEmail } = useEmailValidation({ email: formFields.email });
  const { errorPassword } = usePasswordValidation({ firstPassword: formFields.password, secondPassword: formFields.confirmPassword, numberValidation: true });

  const dispatch = useDispatch();
  const signUpStarted = useSelector(selectSignUpStarted)
  const signUpFailed = useSelector(selectSignUpFailed)
  const signUpErrorMessage = useSelector(selectSignUpErrorMessage)

  const setFieldValue = (fieldName: string, value: string) => {
    setFormFields(prevFormFields => ({
      ...prevFormFields,
      [fieldName]: value
    }))
  }

  const isFormDataValid = (): boolean => {
    return errorEmail === '' && errorPassword === '';
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setValidation(true);
    if(isFormDataValid()){
      const { firstName, lastName, email, password } = formFields
      dispatch(register(firstName, lastName, email, password))
    }
  }

  return <RegisterForm
    formFields={formFields}
    validEmail={validEmail}
    errorEmail={errorEmail}
    showPassword={showPassword}
    showValidation={showValidation}
    errorPassword={errorPassword}
    setFieldValue={setFieldValue}
    setShowPassword={setShowPassword}
    handleSubmit={handleSubmit}
    signUpStarted={signUpStarted}
    signUpFailed={signUpFailed}
    signUpErrorMessage={signUpErrorMessage}
  />
}

export default RegisterFormContainer;