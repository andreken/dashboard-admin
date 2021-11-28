import { actionTypes } from "./photos.actionTypes"

export const fetchStarted = () => ({
  type: actionTypes.FETCH_STARTED
})

export const fetchSuccess = (payload: any) => ({
  type: actionTypes.FETCH_SUCCESS,
  payload,
})

export const fetchFailed = () => ({
  type: actionTypes.FETCH_FAILED
})