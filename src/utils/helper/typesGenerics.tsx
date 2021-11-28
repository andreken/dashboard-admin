export type ValueOf<T> = T[keyof T];

export interface IAction<T,P> {
  type: ValueOf<T>,
  payload: P,
}