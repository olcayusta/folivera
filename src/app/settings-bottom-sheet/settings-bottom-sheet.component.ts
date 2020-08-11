import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '@shared/services/auth.service';

@Component({
  selector: 'app-settings-bottom-sheet',
  templateUrl: './settings-bottom-sheet.component.html',
  styleUrls: ['./settings-bottom-sheet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsBottomSheetComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
  }
}
