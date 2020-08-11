import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter
} from '@angular/core';
import { AuthService } from '@shared/services/auth.service';
import { User } from '@shared/models/user';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from '../../login-dialog/login-dialog.component';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopBarComponent implements OnInit {
  @Output()
  openSidenav = new EventEmitter();

  @Output()
  openSheet = new EventEmitter();

  user$: Observable<User>;

  constructor(
    private authService: AuthService,
    private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.user$ = this.authService.user;
  }

  openLoginDialog() {
    this.dialog.open(LoginDialogComponent, {
      width: '512px'
    })
  }
}
