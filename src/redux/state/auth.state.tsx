const initialAuthState = {
  signInStarted: false,
  signInSuccess: false,
  signInFailed: false,
  signInErrorMessage: null,
  signUpStarted: false,
  signUpSuccess: false,
  signUpFailed: false,
  signUpErrorMessage: null,
}

export type TAuthState = Omit<typeof initialAuthState, 'signInErrorMessage'|'signUpErrorMessage'> & 
  { signInErrorMessage: string | null, signUpErrorMessage: string | null }

export default initialAuthState