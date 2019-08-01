import { Component, OnInit } from '@angular/core';
import {AccountInterface} from '../interfaces/account.interface';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../user.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {
  accountsArray: AccountInterface[] = [{id: 1, name: 'Ebay', userName: 'pdurgin', password: 'da174ero'},
    {id: 1, name: 'Ebay', userName: 'pdurgin', password: 'da174ero'}];
  userId;
  constructor(private router: Router, private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.userId = this.userService.userId;
  }
  onEdit(accountId: number) {
    this.router.navigate([`${this.userId}/accounts/${accountId}/edit`]);
  }
  addAccount() {
    this.router.navigate([`${this.userId}/accounts/add`]);
  }
  createBlank(input: string) {
    const blank = '';
    for (const char of input) {
      blank.concat('*');
    }
    return blank;
  }

}
