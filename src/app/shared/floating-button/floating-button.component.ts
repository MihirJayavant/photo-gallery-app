import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core'
import { GestureEventData } from 'tns-core-modules/ui/gestures'

@Component({
    selector: 'FloatingButton',
    moduleId: module.id,
    templateUrl: './floating-button.component.html',
    styleUrls: ['./floating-button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FloatingButtonComponent {
    @Output()
    click = new EventEmitter<GestureEventData>()

    onTap(event: GestureEventData) {
        this.click.emit(event)
    }
}
