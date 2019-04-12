import { ActionReducerMap } from '@ngrx/store'
import * as fromFav from './favourite.reducer'
import { Actions } from '../actions'

export interface IHomeState {
    favourite: fromFav.IFavouriteState
}

export const reducers: ActionReducerMap<IHomeState, Actions> = {
    favourite: fromFav.reducer
}
