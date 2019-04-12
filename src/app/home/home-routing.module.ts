import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from 'nativescript-angular/router'
import { HomePageComponent } from './components/home-page/home-page.component'

const routes: Routes = [
    { path: '', component: HomePageComponent, pathMatch: 'full' }
]

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class HomeRoutingModule { }
