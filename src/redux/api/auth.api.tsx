import { Dispatch } from 'react';
import { signIn, signUp, signOut } from '../../database'
import { ValueOf } from '../../utils/helper/typesGenerics';
import { IStoreUserDataPayload, TActionTypes as TUserActionTypes } from '../actions/user.actionTypes';
import { TActionTypes as TAuthActionTypes } from '../actions/auth.actionTypes';
import { auth as authActions, user as userActions } from '../actions'

type IDispatchObj = {
  type: ValueOf<TAuthActionTypes>,
  payload?: string,
} | {
  type: ValueOf<TUserActionTypes>,
  payload?: IStoreUserDataPayload,  
}

export const login = (email: string, password: string) => async (dispatch: Dispatch<IDispatchObj>) => {
  dispatch(authActions.signInStarted())
  try {
    const user: any = await signIn(email, password)
    if(user) {
      dispatch(userActions.storeUserData({
        email,
        firstName: user.firstName,
        lastName: user.lastName,
      }))
      dispatch(authActions.signInSuccess());
    }
  } catch (err: any) {
    const message = err?.message
    dispatch(authActions.signInFailed(message));
  }
};

export const register = (firstName: string, lastName: string, email: string, password: string) => async (dispatch: Dispatch<IDispatchObj>) => {
  dispatch(authActions.signUpStarted())
  try {
    const user: any = await signUp(firstName, lastName, email, password)
    if(user) {
      dispatch(userActions.storeUserData({
        email,
        firstName,
        lastName,
      }))
      dispatch(authActions.signUpSuccess());
    }
  } catch (err: any) {
    const message = err?.message
    dispatch(authActions.signUpFailed(message));
  }
};

export const logout = () => async (dispatch: Dispatch<IDispatchObj>) => {
  await signOut()
  dispatch(userActions.removeUserData())
  dispatch(authActions.signOut())
}