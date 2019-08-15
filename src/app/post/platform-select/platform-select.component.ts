import { Component, OnInit } from '@angular/core';
import {UserService} from '../../user.service';
import {AccountInterface} from '../../interfaces/account.interface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-platform-select',
  templateUrl: './platform-select.component.html',
  styleUrls: ['./platform-select.component.scss']
})
export class PlatformSelectComponent implements OnInit {
  userAccounts: AccountInterface[];
  selected;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    console.log(this.userService.post);
    this.userService.getPlatforms();
    this.userAccounts = this.userService.userPlatforms;
  }
  select(account: AccountInterface) {
    account.selected = !account.selected;
    this.userService.updatePlatform(account);
  }
  platformsSelected() {
    this.selected = false;
    for (const account of this.userAccounts) {
      if (account.selected) {
        this.selected = true;
        return;
      }
    }
  }
  post() {
    this.platformsSelected();
    if (this.selected) {
      console.log(this.userService.post);
      this.userService.post = {};
      this.router.navigate([`home/post/completed`]);
    }
  }

}
