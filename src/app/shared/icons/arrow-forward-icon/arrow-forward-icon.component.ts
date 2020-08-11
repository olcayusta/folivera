import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-arrow-forward-icon',
  templateUrl: 'arrow_forward-24px.svg',
  styleUrls: ['./arrow-forward-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArrowForwardIconComponent {

  constructor(
    private cdr: ChangeDetectorRef
  ) {
    cdr.detach();
  }

}
