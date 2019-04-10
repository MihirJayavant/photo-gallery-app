import { Component, ChangeDetectionStrategy } from '@angular/core'
import * as imagepicker from 'nativescript-imagepicker'
import { FavouritePhotoService } from '~/app/services'
import { IPhoto } from '~/core/models'

@Component({
  selector: 'StartPage',
  moduleId: module.id,
  templateUrl: 'start-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StartPageComponent {
  flag = false

  constructor(private favPhotos: FavouritePhotoService) {}

  onTap() {
    // To fix a bug causing to events
    this.flag = !this.flag
    if (this.flag) {
      const context = imagepicker.create({
        mode: 'multiple'
      })

      this.startSelection(context)
    }
  }

  private startSelection(context: imagepicker.ImagePicker) {
    context
      .authorize()
      .then(() => context.present())
      .then(selection => {
        const photos: IPhoto[] = selection.map(photo => {
          const temp = photo as any

          return { url: temp._android }
        })
        this.favPhotos.addPhotos(photos)
      })
      .catch(e => {
        console.log(e)
      })
  }
}
