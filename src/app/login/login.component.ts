import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }
  toHome() {
    this.userService.userId = 1;
    this.router.navigate([`${1}`]);
  }

}
