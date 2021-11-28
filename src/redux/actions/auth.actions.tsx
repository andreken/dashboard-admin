import { actionTypes } from "./auth.actionTypes"

export const signInStarted = () => ({
  type: actionTypes.SIGN_IN_STARTED
})

export const signInSuccess = () => ({
  type: actionTypes.SIGN_IN_SUCCESS
})

export const signInFailed = (errorMessage: string) => ({
  type: actionTypes.SIGN_IN_FAILED,
  payload: errorMessage,
})

export const signUpStarted = () => ({
  type: actionTypes.SIGN_UP_STARTED
})

export const signUpSuccess = () => ({
  type: actionTypes.SIGN_UP_SUCCESS
})

export const signUpFailed = (errorMessage: string) => ({
  type: actionTypes.SIGN_UP_FAILED,
  payload: errorMessage,
})

export const signOut = () => ({
  type: actionTypes.SIGN_OUT
})