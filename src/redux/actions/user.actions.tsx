import { actionTypes, IStoreUserDataPayload } from "./user.actionTypes"

export const storeUserData = (payload: IStoreUserDataPayload) => ({
  type: actionTypes.STORE_USER_DATA,
  payload,
})

export const removeUserData = () => ({
  type: actionTypes.REMOVE_USER_DATA,
})