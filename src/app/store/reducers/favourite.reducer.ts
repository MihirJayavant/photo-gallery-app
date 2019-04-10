import { IPhoto } from '~/core/models'
import { List } from 'immutable'
import { FavActionTypes, FavouriteActions } from '../actions'

export interface IFavouriteState {
  photos: List<IPhoto>
}

export const initialState: IFavouriteState = {
  photos: List([])
}

export function reducer(state = initialState, action: FavouriteActions): IFavouriteState {
  switch (action.type) {
    case FavActionTypes.Add:
      return {
        ...state,
        photos: state.photos.push(...action.photos)
      }
    default:
      return state
  }
}
