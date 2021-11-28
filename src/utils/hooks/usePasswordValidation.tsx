import { useState, useEffect } from "react";

interface IProps {
  firstPassword: string,
  secondPassword: string,
  requiredLength?: number,
  lengthValidation?: boolean,
  numberValidation?: boolean,
  lowercaseValidation?: boolean,
  uppercaseValidation?: boolean,
  specialcharacterValidation?: boolean,
}

const usePasswordValidation = ({
  firstPassword = '',
  secondPassword = '',
  requiredLength = 8,
  lengthValidation = true,
  numberValidation = false,
  specialcharacterValidation = false,
}: IProps) => {

  const [validLength, setValidLength] = useState<boolean>(false);
  const [hasNumber, setHasNumber] = useState<boolean>(false);
  const [hasSpecialChar, setSpecialChar] = useState<boolean>(false);
  const [match, setMatch] = useState<boolean>(false);
  const [errorPassword, setError] = useState<string>('');
    
  useEffect(() => {

    let _validLength, _hasNumber, _hasSpecialChar, _match;
    _validLength = _hasNumber = _hasSpecialChar = _match = true;

    if(lengthValidation){
      _validLength = firstPassword.length >= requiredLength ? true : false;
      setValidLength(_validLength);
    }
    if(numberValidation){
      _hasNumber = /\d/.test(firstPassword);
      setHasNumber(_hasNumber);
    }
    if(specialcharacterValidation){
      _hasSpecialChar = /[ `!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/.test(firstPassword);
      setSpecialChar(_hasSpecialChar);
    }
    _match = firstPassword !== "" && firstPassword === secondPassword;
    setMatch(_match);

    let _errorPassword = '';
    if(!_validLength){
      _errorPassword = `Password should be at least ${requiredLength} characters long`;
    }
    else if(!_hasNumber) {
      _errorPassword = 'Password should contain at least one number';
    }
    else if(!_hasSpecialChar) {
      _errorPassword = 'Password should contain at least one special character';
    }
    else if(!_match) {
      _errorPassword = 'Password doesn\'t match';
    }
    setError(_errorPassword);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstPassword, secondPassword]);    // Only password fields change values after render
    
  return { validLength, hasNumber, hasSpecialChar, match, errorPassword };

};

export default usePasswordValidation;