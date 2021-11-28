import axios from './axios'
import { storageGetItemValue, storageRemoveItem, storageSaveItem } from './localStorage'

function setAuthToken(token: string | null) {
  if (token) {
    storageSaveItem('authToken', token)
    axios.defaults.headers.common.Authorization = token
  }
  else {
    storageRemoveItem('authToken')
    delete axios.defaults.headers.common.Authorization
  }
}

export const saveAuthToken = (token: string) => setAuthToken(token)

export const deleteAuthToken = () => setAuthToken(null)

export const getAuthToken = () => storageGetItemValue('authToken')