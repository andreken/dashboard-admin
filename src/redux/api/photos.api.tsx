import { Dispatch } from 'react';
import axios from '../../utils/helper/axios'
import { ValueOf } from '../../utils/helper/typesGenerics';
import { TPhotosList } from '../state'
import { TActionTypes } from '../actions/photos.actionTypes'
import { photos as photosActions } from '../actions'

type IDispatchObj = {
  type: ValueOf<TActionTypes>,
  payload?: TPhotosList,
}

export const fetchPhotos = (limit: number = 50) => async (dispatch: Dispatch<IDispatchObj>) => {
  dispatch(photosActions.fetchStarted())
  try {
    const res = await axios.get('photos?_limit='+limit)
    const data = res.data
    dispatch(photosActions.fetchSuccess(data))
  } catch(e) {
    dispatch(photosActions.fetchFailed())
  }
}