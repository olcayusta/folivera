import { Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { FeedbackDialogComponent } from '../../feedback-dialog/feedback-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { IconsModule } from '@shared/icons/icons.module';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { SidenavService } from '@shared/services/sidenav.service';
import { SettingsDialogComponent } from '../../settings-dialog/settings-dialog.component';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent {

  constructor(
    private dialog: MatDialog,
    private sidenavService: SidenavService
  ) {
  }

  closeSidenav(): void {
    this.sidenavService.toggle();
  }

  async openFeedbackDialog(): Promise<void> {
    const {FeedbackDialogComponent} = await import('../../feedback-dialog/feedback-dialog.component');
    await this.dialog.open(FeedbackDialogComponent, {
      autoFocus: false,
      width: '768px'
    });
  }

  async openSettingsDialog() {
    const {SettingsDialogComponent} = await import('../../settings-dialog/settings-dialog.component')
    await this.dialog.open(SettingsDialogComponent, {
      autoFocus: false
    });
  }
}

@NgModule({
  declarations: [SidenavComponent],
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    IconsModule,
    RouterModule
  ]
})
class SidenavModule {
}
