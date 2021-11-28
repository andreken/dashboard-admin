import createActionTypes from '../../utils/helper/createActionTypes'

const namespace = 'USER'

const types = {
  STORE_USER_DATA: 'STORE_USER_DATA',
  REMOVE_USER_DATA: 'REMOVE_USER_DATA',
}

export type TActionTypes = {
  [key in keyof typeof types]: `${typeof namespace}/${key}`
}

export const actionTypes: TActionTypes = createActionTypes(namespace, Object.values(types))

export interface IStoreUserDataPayload {
  email: string,
  firstName: string,
  lastName: string,
}