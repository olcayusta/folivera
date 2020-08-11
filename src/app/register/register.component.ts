import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@shared/services/auth.service';
import { Title } from '@angular/platform-browser';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private title: Title
  ) {
  }

  ngOnInit(): void {
    this.title.setTitle(`Hesap oluştur - ${environment.appName}`)
    this.form = this.fb.group({
      email: ['olcayusta02@gmail.com', [Validators.required]],
      password: ['12345678', [Validators.required]],
    }, {updateOn: 'submit'});
  }

  submit(): void {
    if (this.form.valid) {
      this.authService.register('olcay02@gmail.com', '123456', 'abc', 'cde').subscribe(value => {
        console.log(value);
      });
    }
  }
}
