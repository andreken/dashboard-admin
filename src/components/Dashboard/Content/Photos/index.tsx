import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Skeleton } from '@mui/material';

import { fetchPhotos } from '../../../../redux/api';
import { selectPhotosFetchStarted, selectPhotosFetchSuccess, selectPhotosList } from '../../../../redux/selectors';

const limit = 24

const Posts = () => {

  const dispatch = useDispatch();
  const fetchSuccess = useSelector(selectPhotosFetchSuccess)
  const fetchStarted = useSelector(selectPhotosFetchStarted)
  const photosList = useSelector(selectPhotosList)

  useEffect(() => {
    if(!fetchSuccess) {
      dispatch(fetchPhotos(limit))
    }
  }, [dispatch, fetchSuccess])
  
  return (
      <Grid container spacing={2}>
        {
          fetchSuccess && photosList.map(photo => (
            <Grid key={photo.id} item xs={12} sm={6} md={4} lg={3} display="flex" justifyContent="center">
              <img src={photo.thumbnailUrl} alt={photo.title} />
            </Grid>
          ))
        }
        {
          fetchStarted && [...new Array(limit)].map((el, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={3} display="flex" justifyContent="center">
              <Skeleton variant="rectangular" width={150} height={150} />
            </Grid>
          ))
        }
      </Grid>
  )
}

export default Posts