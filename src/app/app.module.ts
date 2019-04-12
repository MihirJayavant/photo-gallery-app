import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from 'nativescript-angular/nativescript.module'
import * as applicationModule from 'tns-core-modules/application'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import * as frescoModule from 'nativescript-fresco'
import { StoreModule } from '@ngrx/store'

if (applicationModule.android) {
    applicationModule.on('launch', () => {
        frescoModule.initialize()
    })
}

@NgModule({
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        StoreModule.forRoot({})
    ],
    declarations: [AppComponent],
    schemas: [NO_ERRORS_SCHEMA],
    providers: []
})
export class AppModule { }
