import * as imagepicker from 'nativescript-imagepicker'

export class ImagePicker {

    static open(mode: 'single' | 'multiple', mediaType: imagepicker.ImagePickerMediaType) {
        const p = imagepicker.create({
            mode, mediaType
        })

        return new ImagePicker(p)
    }
    constructor(private context: imagepicker.ImagePicker) {

    }

    async checkAndAskPermission() {
        await this.context.authorize()

        return this
    }

    async getPhotosUrl(): Promise<string[]> {
        const selections = await this.context.present()
        const urls = selections.map(photo => photo.android)

        return urls
    }

}
