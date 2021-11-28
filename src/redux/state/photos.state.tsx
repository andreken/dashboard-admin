export type TPhotosList = {
  albumId: number,
  id: number,
  title: string,
  url: string,
  thumbnailUrl: string,
}[]

export type TPhotosState = {
  list: TPhotosList,
  fetchStarted: boolean,
  fetchSuccess: boolean,
  fetchFailed: boolean,
}

const initialTodosState: TPhotosState = {
  list: [],
  fetchStarted: false,
  fetchSuccess: false,
  fetchFailed: false,
}

export default initialTodosState