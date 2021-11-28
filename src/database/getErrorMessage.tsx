type TErrorCode = 'auth/wrong-password' | 'auth/user-not-found' | 'auth/too-many-requests' | 'auth/email-already-exists'

const getErrorMessage = (code: TErrorCode) => {
  switch(code){
    case 'auth/wrong-password':
    case 'auth/user-not-found':
      return 'Login failed. Email or password not valid.'
    case 'auth/too-many-requests':
      return 'Access to this account has been temporarily disabled due to many failed login attempts. Try again later.'
    case 'auth/email-already-exists':
      return 'Registration failed. Email already exists.'
    default:
      return 'An error has occurred. Please try again later.'
  }
}

export default getErrorMessage