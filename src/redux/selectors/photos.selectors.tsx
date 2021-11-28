import { TState } from "../state"

export const selectPhotosList = (state: TState) => state.photos.list
export const selectPhotosFetchStarted = (state: TState) => state.photos.fetchStarted
export const selectPhotosFetchSuccess = (state: TState) => state.photos.fetchSuccess
export const selectPhotosFetchFailed = (state: TState) => state.photos.fetchFailed