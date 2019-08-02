import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userId;
  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.userId = this.userService.userId;
    console.log(this.userId);
  }
  toAccounts() {
    this.router.navigate([`${this.userId}/accounts`]);
  }
  toPost() {
    this.router.navigate([`${this.userId}/post`]);
  }
  signOut() {
    this.router.navigate( [``]);
  }

}
