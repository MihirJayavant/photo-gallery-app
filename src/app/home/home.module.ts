import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from 'nativescript-angular/common'

import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular'

import { HomeRoutingModule } from './home-routing.module'
import { components } from './components'
import { services } from './services'
import { reducers } from './store'
import { FloatingButtonModule } from '../shared/floating-button/floating-button.module';

import { TNSFrescoModule } from 'nativescript-fresco/angular'
import { StoreModule } from '@ngrx/store'

@NgModule({
    imports: [
        NativeScriptCommonModule,
        HomeRoutingModule,
        TNSFrescoModule,
        FloatingButtonModule,
        NativeScriptUIListViewModule,
        StoreModule.forFeature('home', reducers)
    ],
    declarations: [...components],
    schemas: [NO_ERRORS_SCHEMA],
    providers: [...services]
})
export class HomeModule { }
