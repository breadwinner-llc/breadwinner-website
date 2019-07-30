import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-accounts-edit',
  templateUrl: './accounts-edit.component.html',
  styleUrls: ['./accounts-edit.component.scss']
})
export class AccountsEditComponent implements OnInit {
  userId;
  accountId;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( (data) => {
      this.userId = data.userId;
      this.accountId = data.accountId;
      console.log(data);
      console.log(this.userId);
      console.log(this.accountId);
    });
  }

}
