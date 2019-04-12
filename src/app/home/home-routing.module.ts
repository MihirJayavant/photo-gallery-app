import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from 'nativescript-angular/router'
import { StartPageComponent } from './components/start-page/start-page.component'

const routes: Routes = [
    { path: '', component: StartPageComponent, pathMatch: 'full' }
]

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class HomeRoutingModule { }
