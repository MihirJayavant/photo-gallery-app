import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core'
import { GestureEventData, TouchGestureEventData } from 'tns-core-modules/ui/gestures'

@Component({
  selector: 'FloatingButton',
  moduleId: module.id,
  template: `
    <StackLayout class="float-btn">
      <Label class="float-btn-text" [text]="text"></Label>
    </StackLayout>
  `,
  styleUrls: ['./floating-button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FloatingButtonComponent {
  @Input()
  text: string = '+'

  @Input()
  backgroundColor = '#30bcff'

  @Input()
  color = 'white'

  @Output()
  tap = new EventEmitter<GestureEventData>()

  onafterprint(event: GestureEventData) {
    this.tap.emit(event)
  }

  ontouchcancel(event: TouchGestureEventData) {
    const btn = event.view
    switch (event.action) {
      case 'down':
        btn.className = 'float-btn down'
        break
      case 'up':
        btn.className = 'float-btn up'
        break
    }
  }
}
