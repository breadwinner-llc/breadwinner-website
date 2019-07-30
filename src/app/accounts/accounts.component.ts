import { Component, OnInit } from '@angular/core';
import {AccountInterface} from '../interfaces/account.interface';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {
  accountsArray: AccountInterface[] = [{id: 1, name: 'Ebay', userName: 'pdurgin', password: 'da174ero'}];
  userId;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( (data) => {
      this.userId = data.userId;
    });
  }
  onEdit(accountId: number) {
    this.router.navigate([`${this.userId}/accounts/${accountId}/edit`]);
  }

}
