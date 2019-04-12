import { Action } from '@ngrx/store'
import { IPhoto } from '~/core/models'

export enum FavActionTypes {
  Add = '[App] Add Favourite'
}

export class AddFavorite implements Action {
  readonly type = FavActionTypes.Add

  constructor(public photos: IPhoto[]) {}
}

export type FavouriteActions = AddFavorite
