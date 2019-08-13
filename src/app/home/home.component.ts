import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../user.service';
import {FirebaseApp} from '@angular/fire';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userId;
  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService, private mfAuth: FirebaseApp) { }

  ngOnInit() {
  }
  toAccounts() {
    this.router.navigate([`home/accounts`]);
  }
  toPost() {
    this.router.navigate([`home/post`]);
  }

}
