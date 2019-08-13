import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AccountInterface} from '../../interfaces/account.interface';
import {UserService} from '../../user.service';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.scss']
})
export class AccountFormComponent implements OnInit {
  accountId = null;
  isEdit = false;
  accountForm;
  accountNames = ['BigCartel', 'eBay', 'Etsy', 'Facebook Marketplace', 'GOAT', 'Grailed', 'Poshmark', 'SHOPIFY', 'Stockx'];
  account  = {} as AccountInterface;
  show = true;
  platform;
  isLoaded = false;
  constructor(private route: ActivatedRoute, private location: Location, private userService: UserService) { }

  ngOnInit() {
    this.route.params.subscribe( (data) => {
      console.log(data)
      this.accountId = data.accountsId;
    });
    if (this.accountId != null) {
      this.isEdit = true;
      this.account = {id: 1, name: 'Ebay', userName: 'pdurgin', password: 'da174ero'};
      this.platform = this.account.name;
    }
    this.initAccountForm();
  }
  initAccountForm() {
    this.accountForm = new FormGroup( {
      name: new FormControl(this.account.name, [Validators.required]),
      userName: new FormControl(this.account.userName, [Validators.required]),
      word: new FormControl(this.account.password, [Validators.required])
    });
    this.disableSelect();
  }
  disableSelect() {
    if (this.isEdit) {
      this.accountForm.controls.name.disable();
    }
    this.isLoaded = true;
  }
  onSave() {
    if (this.accountForm.valid) {
      if (this.isEdit) {
        this.account.name = this.platform;
        this.account.userName = this.accountForm.value.userName;
        this.account.password = this.accountForm.value.word;
        this.location.back()
      } else {
        this.account.name = this.accountForm.value.name;
        this.account.userName = this.accountForm.value.userName;
        this.account.password = this.accountForm.value.word;
        this.location.back();
        this.userService.createPlatform(this.account);
      }
    }
  }
  onCancel() {
    this.location.back();
  }

}
