import { Dispatch } from 'react';
import axios from '../../utils/helper/axios'
import { ValueOf } from '../../utils/helper/typesGenerics';
import { TTodosList } from '../state'
import { TActionTypes } from '../actions/todos.actionTypes'
import { todos as todosActions } from '../actions'

type IDispatchObj = {
  type: ValueOf<TActionTypes>,
  payload?: TTodosList,
}

export const fetchTodos = (limit: number = 50) => async (dispatch: Dispatch<IDispatchObj>) => {
  dispatch(todosActions.fetchStarted())
  try {
    const res = await axios.get('todos?_limit='+limit)
    const data = res.data
    dispatch(todosActions.fetchSuccess(data))
  } catch(e) {
    dispatch(todosActions.fetchFailed())
  }
}