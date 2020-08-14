import { Component, OnInit, ChangeDetectionStrategy, NgModule, ElementRef } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { User } from '@shared/models/user';
import { RouterModule } from '@angular/router';
import { IconsModule } from '@shared/icons/icons.module';
import { MatDialog } from '@angular/material/dialog';
import { SettingsDialogComponent } from '../../../dialogs/settings-dialog/settings-dialog.component';

@Component({
  selector: 'app-avatar-popup',
  templateUrl: './avatar-popup.component.html',
  styleUrls: ['./avatar-popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvatarPopupComponent implements OnInit {
  user: User;

  constructor(
    private authService: AuthService,
    private elementRef: ElementRef,
    private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.user = this.authService.userValue;
  }

  openSettingsDialog(): void {
    this.dialog.open(SettingsDialogComponent, {
      width: '768px',
      autoFocus: false
    });
  }

  exitToApp(): void {
    this.authService.logout();
  }
}

@NgModule({
  declarations: [AvatarPopupComponent],
  imports: [
    MatIconModule,
    MatListModule,
    RouterModule,
    IconsModule
  ]
})
class AvatarPopupModule {
}
