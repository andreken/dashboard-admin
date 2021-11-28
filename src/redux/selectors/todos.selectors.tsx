import { TState } from "../state"

export const selectTodosList = (state: TState) => state.todos.list
export const selectTodosFetchStarted = (state: TState) => state.todos.fetchStarted
export const selectTodosFetchSuccess = (state: TState) => state.todos.fetchSuccess
export const selectTodosFetchFailed = (state: TState) => state.todos.fetchFailed