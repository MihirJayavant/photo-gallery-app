import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from 'nativescript-angular/common'
import { FloatingButtonComponent } from './floating-button.component'

@NgModule({
  imports: [NativeScriptCommonModule],
  declarations: [FloatingButtonComponent],
  exports: [FloatingButtonComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class FloatingButtonModule {}
