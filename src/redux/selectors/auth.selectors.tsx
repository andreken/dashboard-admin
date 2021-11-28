import { TState } from "../state"

export const selectSignInStarted = (state: TState) => state.auth.signInStarted
export const selectSignInSuccess = (state: TState) => state.auth.signInSuccess
export const selectSignInFailed = (state: TState) => state.auth.signInFailed
export const selectSignInErrorMessage = (state: TState) => state.auth.signInErrorMessage
export const selectSignUpStarted = (state: TState) => state.auth.signUpStarted
export const selectSignUpSuccess = (state: TState) => state.auth.signUpSuccess
export const selectSignUpFailed = (state: TState) => state.auth.signUpFailed
export const selectSignUpErrorMessage = (state: TState) => state.auth.signUpErrorMessage