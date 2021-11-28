export type TTodosList = {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}[]

export type TTodosState = {
  list: TTodosList,
  fetchStarted: boolean,
  fetchSuccess: boolean,
  fetchFailed: boolean,
}

const initialTodosState: TTodosState = {
  list: [],
  fetchStarted: false,
  fetchSuccess: false,
  fetchFailed: false,
}

export default initialTodosState