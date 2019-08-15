import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../user.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm;
  show = true;
  errorMessage;
  successMessage;
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.initLoginForm();
  }
  initLoginForm() {
    this.loginForm = new FormGroup( {
      email: new FormControl('', [Validators.required]),
      word: new FormControl('', [Validators.required])
    });
  }
  signIn() {
    this.tryLogin({email: this.loginForm.value.email, password: this.loginForm.value.word});
  }
  signUp() {
    this.tryRegister({email: this.loginForm.value.email, password: this.loginForm.value.word});
  }

  tryRegister(value) {
    this.userService.doRegister(value)
      .then(res => {
        this.router.navigate([`home/accounts`]);
      }, err => {
        console.log(err);
        this.errorMessage = err.message;
      });
  }

  tryLogin(value) {
    this.userService.doLogin(value)
      .then(res => {
        console.log(res);
        this.router.navigate([`home/post`]);
      }, err => {
        console.log(err);
        this.errorMessage = err.message;
      });
  }
}
