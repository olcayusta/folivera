import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  NgModule
} from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-feedback-dialog',
  templateUrl: './feedback-dialog.component.html',
  styleUrls: ['./feedback-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedbackDialogComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  submit(): void {
    alert('Test!');
  }
}

@NgModule({
  declarations: [FeedbackDialogComponent],
  imports: [
    MatInputModule,
    MatDialogModule,
    OverlayModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
class FeedbackDialogModule {
}
