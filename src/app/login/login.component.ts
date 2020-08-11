import { Component, OnInit, ChangeDetectionStrategy, ɵmarkDirty as markDirty } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@shared/services/auth.service';
import { Title } from '@angular/platform-browser';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  passwordHide = true;
  loader = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private title: Title
  ) {
  }

  ngOnInit(): void {
    this.title.setTitle(`Oturum aç - ${environment.appName}`)
    this.form = this.fb.group({
      email: ['olcayusta02@gmail.com', [Validators.required, Validators.email]],
      password: ['12345678', [Validators.required, Validators.min(8)]],
    }, {updateOn: 'submit'});
  }

  submit(): void {
    if (this.form.valid) {
      this.loader = true;
      this.authService.login('aaa', 'bbb').subscribe(value => {
        console.log(value);
        this.loader = false;
        markDirty(this);
      });
    }
  }
}
