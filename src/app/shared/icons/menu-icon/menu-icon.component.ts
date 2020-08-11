import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-menu-icon',
  templateUrl: 'menu-24px.svg',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuIconComponent {

  constructor(
    private cdr: ChangeDetectorRef
  ) {
    cdr.detach();
  }
}
