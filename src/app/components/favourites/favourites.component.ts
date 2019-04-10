import { Component, ChangeDetectionStrategy, OnInit, OnDestroy, ViewChild } from '@angular/core'
import { FavouritePhotoService } from '~/app/services'
import { RadListViewComponent } from 'nativescript-ui-listview/angular/listview-directives'
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array'
import { IPhoto } from '~/core/models'
import { Subscription } from 'rxjs'

@Component({
  selector: 'Favourites',
  moduleId: module.id,
  templateUrl: './favourites.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavouritesComponent implements OnInit, OnDestroy {
  photos: ObservableArray<IPhoto> = new ObservableArray<IPhoto>([])
  photosObservable: Subscription

  @ViewChild('listview')
  listview: RadListViewComponent

  constructor(private photoService: FavouritePhotoService) {}

  ngOnInit() {
    this.photosObservable = this.photoService.getPhotos().subscribe(photos => {
      this.photos.splice(0, photos.count() - 1)
      this.photos.push(...photos.toArray())
      if (this.listview) {
        this.listview.listView.refresh()
      }
    })
  }

  ngOnDestroy() {
    this.photosObservable.unsubscribe()
  }
}
