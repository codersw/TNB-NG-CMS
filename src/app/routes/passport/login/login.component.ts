import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  error = '';
  loading = false;
  loadingdesc = '登录';
  constructor(
    private fb: FormBuilder,
    private loginService: LoginService
  ) { }
  ngOnInit() {
    this.form = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }
  submitForm() {
    if (this.form.valid) {
      this.loginService.login(this.userName.value, this.password.value);
    }
  }
  get userName() { return this.form.controls.userName; }
  get password() { return this.form.controls.password; }
}
