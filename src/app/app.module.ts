import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from 'nativescript-angular/nativescript.module'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { components } from './components'

import { TNSFrescoModule } from 'nativescript-fresco/angular'
import * as frescoModule from 'nativescript-fresco'
import * as applicationModule from 'tns-core-modules/application'
import { FloatingButtonModule } from './shared/floating-button/floating-button.module'

if (applicationModule.android) {
  applicationModule.on('launch', () => {
    frescoModule.initialize()
  })
}

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule, TNSFrescoModule, FloatingButtonModule],
  declarations: [AppComponent, ...components],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
