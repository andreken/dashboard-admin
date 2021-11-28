import { useEffect, useState } from 'react';

interface IProps {
  email: string
}

const useEmailValidation = ({ email = '' }: IProps) => {

  const [validEmail, setValidEmail] = useState<boolean>(false);
  const [errorEmail, setError] = useState<string>('');

  useEffect(() => {
    const isEmailValid = validateEmail(email);
    setValidEmail(isEmailValid);
    setError(isEmailValid ? '' : 'Invalid email');
  }, [email])

  const validateEmail = (email: string) => {
    if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))
      return true;
    return false;
  }

  return { validEmail, errorEmail }
}

export default useEmailValidation;
