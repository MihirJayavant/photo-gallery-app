import { ActionReducerMap } from '@ngrx/store'
import * as fromFav from './favourite.reducer'
import { Actions } from '../actions'

export interface IState {
  favourite: fromFav.IFavouriteState
}

export const reducers: ActionReducerMap<IState, Actions> = {
  favourite: fromFav.reducer
}
