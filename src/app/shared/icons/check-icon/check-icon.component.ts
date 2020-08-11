import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-check-icon',
  templateUrl: 'check-24px.svg',
  styleUrls: ['./check-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckIconComponent {}
