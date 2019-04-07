import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from 'nativescript-angular/common'

import { AlbumRoutingModule } from './album-routing.module'
import { components } from './components'

@NgModule({
  imports: [NativeScriptCommonModule, AlbumRoutingModule],
  declarations: [...components],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AlbumModule {}
