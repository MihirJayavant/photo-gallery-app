import { Component, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'Favourites',
  moduleId: module.id,
  templateUrl: './favourites.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavouritesComponent {
  onTap() {}
}
