import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../user.service';

@Component({
  selector: 'app-accounts-edit',
  templateUrl: './accounts-edit.component.html',
  styleUrls: ['./accounts-edit.component.scss']
})
export class AccountsEditComponent implements OnInit {
  userId;
  accountId;
  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.route.params.subscribe((data) => {
      this.accountId = data.accountId;
    });
    this.userId = this.userService.userId;
  }

}
