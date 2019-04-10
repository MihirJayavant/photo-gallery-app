import { createSelector } from '@ngrx/store'
import { IState } from '../reducers'

export const selectFavourite = (state: IState) => state.favourite

export const selectFavouritePhotos = createSelector(
  selectFavourite,
  state => state.photos
)
