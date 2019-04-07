import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from 'nativescript-angular/common'

import { FavouriteRoutingModule } from './favourite-routing.module'
import { components } from './components'

@NgModule({
  imports: [NativeScriptCommonModule, FavouriteRoutingModule],
  declarations: [...components],
  schemas: [NO_ERRORS_SCHEMA]
})
export class FavouriteModule {}
