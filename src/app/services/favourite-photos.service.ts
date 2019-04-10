import { Injectable } from '@angular/core'
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array'
import { IState, selectFavouritePhotos, AddFavorite } from '../store'
import { Store, select } from '@ngrx/store'
import { map } from 'rxjs/operators'
import { IPhoto } from '~/core/models'

@Injectable()
export class FavouritePhotoService {
  constructor(private store: Store<IState>) {}

  addPhotos(photos: IPhoto[]) {
    this.store.dispatch(new AddFavorite(photos))
  }

  getPhotos() {
    return this.store.pipe(select(selectFavouritePhotos))
  }
}
