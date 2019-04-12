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

    constructor(private favPhotos: FavouritePhotoService) { }

    onFabClick() {
        const context = imagepicker.create({
            mode: 'multiple', mediaType: imagepicker.ImagePickerMediaType.Image
        })

        this.startSelection(context)
    }

    private startSelection(context: imagepicker.ImagePicker) {
        context
            .authorize()
            .then(() => context.present())
            .then(selection => {
                const photos: IPhoto[] = selection.map(photo => ({ url: photo.android }))
                this.favPhotos.addPhotos(photos)
            })
            .catch(e => console.log(e))
    }
}
