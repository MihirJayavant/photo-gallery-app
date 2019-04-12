import { Component, ChangeDetectionStrategy } from '@angular/core'

import { FavouritePhotoService } from '../../services'
import { ImagePicker } from '~/infrastructure/feature'
import { ImagePickerMediaType } from 'nativescript-imagepicker';

@Component({
    selector: 'StartPage',
    moduleId: module.id,
    templateUrl: 'home-page.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent {

    constructor(private photoService: FavouritePhotoService) { }

    onFabClick() {
        const context = ImagePicker.open('multiple', ImagePickerMediaType.Image)

        this.startSelection(context)
    }

    private startSelection(context: ImagePicker) {
        context
            .checkAndAskPermission()
            .then(picker => picker.getPhotosUrl())
            .then(photos => this.addToService(photos))
            .catch(e => console.log(e))
    }

    private addToService(urls: string[]) {
        const photos = urls.map(p => ({ url: p }))
        this.photoService.addPhotos(photos)
    }
}
