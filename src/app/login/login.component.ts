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
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.initLoginForm();
  }
  initLoginForm() {
    this.loginForm = new FormGroup( {
      userName: new FormControl('', [Validators.required]),
      word: new FormControl('', [Validators.required])
    });
  }
  signIn() {
    this.userService.userId = 1;
    console.log('Sign In');
    console.log(this.loginForm.value.userName);
    console.log(this.loginForm.value.word);
    this.router.navigate([`${1}/accounts`]);
  }
  signUp() {
    this.userService.userId = 1;
    console.log('Sign Up');
    this.router.navigate([`${1}/accounts`]);
  }
}
