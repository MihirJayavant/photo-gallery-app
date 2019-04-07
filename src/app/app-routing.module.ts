import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NSEmptyOutletComponent } from 'nativescript-angular'
import { NativeScriptRouterModule } from 'nativescript-angular/router'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/(favTab:fav/default//albumTab:album/default)',
    pathMatch: 'full'
  },

  {
    path: 'fav',
    component: NSEmptyOutletComponent,
    loadChildren: '~/app/favourite/favourite.module#FavouriteModule',
    outlet: 'favTab'
  },
  {
    path: 'album',
    component: NSEmptyOutletComponent,
    loadChildren: '~/app/album/album.module#AlbumModule',
    outlet: 'albumTab'
  }
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {}
