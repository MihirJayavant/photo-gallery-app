import { createSelector, createFeatureSelector } from '@ngrx/store'
import { IHomeState } from '../reducers'

export const selectHome = createFeatureSelector<IHomeState>('home');

export const selectFavourite = createSelector(
    selectHome,
    (state: IHomeState) => state.favourite
)

export const selectFavouritePhotos = createSelector(
    selectFavourite,
    state => state.photos
)
